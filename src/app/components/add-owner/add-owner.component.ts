import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { Owner } from 'src/app/API.service';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.scss']
})
export class AddOwnerComponent {

  ownerName: String = '';
  ownerPhone: Number = 0;
  ownerEmail: String = '';

  ownerForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private _ownersService: OwnersService, 
    private _snackBar: MatSnackBar) {
    this.ownerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async onAddNewOwnerPressed(owner: Owner, formDirective: FormGroupDirective) {
    try {
      await this._ownersService.createOwner(owner).then(() =>{
        this._snackBar.open('Created a new owner', 'OK', { duration: 3000 });
        this.ownerForm.reset();
        formDirective.resetForm();
      });      
    } catch (error) {
      this._snackBar.open('Error creating the owner', 'OK', { duration: 3000 });
    }
  }

  onCancelPressed() {
    this.router.navigate(['main/owners']);
  }
}
