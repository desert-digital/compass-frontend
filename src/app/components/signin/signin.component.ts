// Core

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Material

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { signIn, resetPassword, type ResetPasswordOutput, confirmResetPassword } from 'aws-amplify/auth';

// Local

import { CompassUser } from 'src/app/API.service';
import { AccountService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hidePassword: boolean;

  user: CompassUser;

  connection: string;
  userName: string;
  email: string;
  password: string;

  newPassword: string;
  recoveryCode: string;

  state: string;

  @Output() lostPasswordEvent: EventEmitter<string> = new EventEmitter<string>();

  diagnostic: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog) { }

  async ngOnInit() {
    this.connection = "disconnected";
    this.state = "normal";

    this.hidePassword = true;

    const userNameFromRoute = this.route.snapshot.paramMap.get('username')
    if (userNameFromRoute !== '') {
      this.userName = userNameFromRoute;
    }
  }

  async onLogin() {
    try {
      await signIn({ username: this.userName, password: this.password });
      this.router.navigate(['login/loading']);
    } catch (error) {
      if (error.code === 'UserNotFoundException') {
        this._snackBar.open('User Not Found', 'OK', { duration: 3000 });
      }
      else if (error.code === 'NotAuthorizedException') {
        this._snackBar.open('Wrong Password', 'OK', { duration: 3000 });
      }
      else {
        this._snackBar.open('A Signin Error Occurred, please try again', 'OK', { duration: 3000 });
      }
    }
  }

  onForgotPassword() {
    this.lostPasswordEvent.emit(null);
    this.state = "passwordLost";
  }

  onCancelForgotPassword() {
    this.state = "normal";
  }

  async onRequestCode() {
    this.state = "codeSent";
    try {
      const output = await resetPassword({ username: this.userName });
      this.handleResetPasswordNextSteps(output);
    } catch (error) {
      console.log(error);
    }
  }

  handleResetPasswordNextSteps(output: ResetPasswordOutput) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        console.log(
          `Confirmation code was sent to ${nextStep.codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case 'DONE':
        console.log('Successfully reset password.');
        break;
    }
  }

  async onSendCode() {
    try {
      await confirmResetPassword({
        username: this.userName, confirmationCode:
          this.recoveryCode, newPassword:
          this.password
      })

    } catch (error) {
      console.log(error);
    }
  }
}