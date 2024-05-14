// Core

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { signUp, confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';

// Local


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // userNames: Account[];

  userName: string;
  password: string;
  email: string;
  phoneNumber: string;

  code: string;

  signingUp: boolean;
  agree: boolean;

  userNameError: boolean = false;
  basic: boolean;

  hidePassword: boolean = false;

  signupForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required]]
  });

  verifyForm = this.formBuilder.group({
    userNameWithCode: ['', [Validators.required]],
    code: ['', []]
  })

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar) {
  }

  async ngOnInit() {
    this.signingUp = true;
    this.agree = false;

    // this.userNames = await DataStore.query(Account);
  }

  async onRegisterPressed() {

    try {
      await signUp({
        username: this.signupForm.value.userName,
        password: this.signupForm.value.password,
        options: {
          userAttributes: {
            email: this.signupForm.value.email,
            phone_number: this.signupForm.value.phoneNumber
          }
        }
      }).then(() => {
        this.signingUp = false;
        console.log('Changed signingUp');
        this.verifyForm.patchValue({
          userNameWithCode: this.signupForm.value.userName
        });
        this._snackBar.open('Check your email for a verification code', 'OK', { duration: 5000 });
      }).catch(error => {
        this._snackBar.open(error.message, 'OK', { duration: 10000 })
      });
    }
    catch (error) {
      this._snackBar.open(error.message, 'OK', { duration: 10000 })
    }
  }

  onHaveCodePressed() {
    this.signingUp = false;
  }

  async onVerifyCodePressed() {
    try {
      await confirmSignUp({
        username: this.verifyForm.value.userNameWithCode,
        confirmationCode: this.verifyForm.value.code
      }).then(() => {
        this._snackBar.open('You are Registered. Sign In to Start', 'OK', { duration: 5000 });
        this.router.navigate(['/login/signin', this.signupForm.value.userName]);
      });
    }
    catch (error) {
      this._snackBar.open(error.message, 'OK', { duration: 5000 });
    }
  }

  async onResendCodePressed() {
    try {
      await resendSignUpCode({username: this.userName}).then(() => {
        this._snackBar.open('Sent a New Code', 'OK', { duration: 5000 });
      });
    }
    catch (error) {
      this._snackBar.open(error.message, 'OK', { duration: 5000 });
    }
  }
}
