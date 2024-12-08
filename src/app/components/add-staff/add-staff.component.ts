import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { Staff } from 'src/API';
import { StaffService } from 'src/app/services/staff.service';
import { CompassUserRole } from 'src/API';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent {

  ownerName: string = '';
  ownerPhone: number = 0;
  ownerEmail: string = '';

  roleNames = CompassUserRole;

  staffForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private _staffService: StaffService, 
    private _snackBar: MatSnackBar) {
    this.staffForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      role: ['', []]
    });
  }

  async onAddNewStaffPressed(staff: Staff, formDirective: FormGroupDirective) {
    try {
      await this._staffService.createStaff(staff).then(() =>{
        this._snackBar.open('Created a new Staff Member', 'OK', { duration: 3000 });
        this.staffForm.reset();
        formDirective.resetForm();
      });      
    } catch (error) {
      this._snackBar.open('Error creating the Staff Member', 'OK', { duration: 3000 });
    }
  }

  onCancelPressed() {
    this.router.navigate(['main/staff']);
  }
}
