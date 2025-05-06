import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { StaffService } from 'src/app/services/staff.service';
import { Staff, CompassUserRole } from 'src/API';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent {

  staffName: string = '';
  staffPhone: number = 0;
  staffEmail: string = '';

  roleNames = CompassUserRole;

  staffForm: FormGroup;

  staff: Staff; 

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _staffService: StaffService,
    private _snackBar: MatSnackBar) {
    this.staffForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', []]
    });
  }
  
  async ngOnInit() {
    await this._setUp();
  }

  async _setUp() {
    const id = this.route.snapshot.paramMap.get('id');
    this.staff = await this._staffService.getStaffFromId(id);

    this.staffForm.setValue({
      id: this.staff.id,
      name: this.staff.name,
      phone: this.staff.phone,
      email: this.staff.email,
      role: this.staff.role
    });
  }

  async onUpdateStaffPressed(staff: Staff) {
    try {
      await this._staffService.updateStaff(staff).then(() => {
        this._snackBar.open(`Updated ${staff.name}`, 'OK', { duration: 3000 })
        this.router.navigate(['/main/staff']);
      });
    } catch (error) {
      console.log(JSON.stringify(error.errors));
      this._snackBar.open('An error occured when updating the action', 'OK', { duration: 3000 })
    }
  }

  onCancelPressed() {
    this.router.navigate(['main/staff']);
  }
}
