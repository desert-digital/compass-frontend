// Core

import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Material

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { Auth } from 'aws-amplify';

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
    if ( userNameFromRoute !== '') {
      this.userName = userNameFromRoute;
    }
  }

  async onLogin() {
    try {
      const user = await Auth.signIn(this.userName, this.password);
      if (user.challengeName) {
        // this.changePassword(user)
        this._snackBar.open('Add Later: Change Password', 'OK', {duration: 10000})
      }
      else {
        this.router.navigate(['login/loading']);
      }
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

  // changePassword(user: any) {
  //   const dialogReference = this._dialog.open(NewpasswordComponent);
  //   dialogReference.afterClosed().subscribe(result => {
  //     Auth.completeNewPassword(user, result).then(() => {
  //       this.accountService.connect(user, 'USER');
  //       this.router.navigate(['/loading']);
  //     }).catch(error => {
  //       this._snackBar.open(error.messages, 'OK');
  //     });
  //   });
  // }

  onForgotPassword() {
    this.lostPasswordEvent.emit(null);
    this.state = "passwordLost";
  }

  onCancelForgotPassword() {
    this.state = "normal";
  }

  async onRequestCode() {
    this.state = "codeSent";
    await Auth.forgotPassword(this.userName).then(() => {
      this._snackBar.open('A Code has been Sent', 'OK', { duration: 3000 });
    }).catch(error => {
      this._snackBar.open(error.message, 'OK', { duration: 5000 });
    });
  }

  async onSendCode() {
    try {
      await Auth.forgotPasswordSubmit(this.userName, this.recoveryCode, this.password).then(() => {
        this._snackBar.open('Your Password has been Update. Login with the New Password', 'OK', { duration: 3000 })
        this.state = "normal";
        this.router.navigate(['/login/signin']);
      });
    } catch (error) {
      this._snackBar.open(error.messages, 'OK', { duration: 3000 });
      this.state = "passwordLost";
    }
  }
}
