import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


// Material

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';


// Amplify

import { Owner, Vessel } from 'src/app/API.service';
import { OwnersService } from 'src/app/services/owners.service';
import { FleetService } from 'src/app/services/fleet.service';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.scss']
})
export class EditOwnerComponent {

  ownerName: String = '';
  ownerPhone: Number = 0;
  ownerEmail: String = '';

  ownerForm: FormGroup;

  vesselList: Vessel[] = [];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _ownersService: OwnersService, 
    private _fleetService: FleetService,
    private _snackBar: MatSnackBar) {
    this.ownerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      vessels: ['']
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const owner = await this._ownersService.getOwnerFromId(id);
    // const vessels = await this._fleetService.getVesselsForOwner(id);

    // this.ownerForm.setValue({
    //   id: owner.id,
    //   name: owner.name,
    //   phone: owner.phone,
    //   email: owner.email
    // }); 
  }

  onUpdateOwnerPressed(owner: Owner, formDirective: FormGroupDirective) {
    return;
  }

  onAddVesselToOwner(event: MatChipInputEvent) {
    console.log(JSON.stringify(event));
  }
}
