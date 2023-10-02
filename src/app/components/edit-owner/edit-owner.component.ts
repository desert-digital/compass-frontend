import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

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
  ownedVesselList: Vessel[] = [];

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

    this.vesselList = await this._fleetService.getVessels();
    this.ownedVesselList = owner.boats.items;

    this.ownerForm.setValue({
      id: owner.id,
      name: owner.name,
      phone: owner.phone,
      email: owner.email,
      vessels: this.ownedVesselList
    });
  }

  isOwned(o1: any, o2: any): boolean {
    return o1 && o2 ? o1 == o2.id : false;
  }

  onVesselChanged(event: any, vessel: Vessel) {
    if (this.ownedVesselList.includes(vessel)) {
      console.log('Turning Off');
      this.ownedVesselList = this.ownedVesselList.filter(item => item != vessel);
    }
    else {
      console.log('Turning On');
      this.ownedVesselList.push(vessel);
    }
    console.log(JSON.stringify(this.ownedVesselList));
  }

  async onUpdateOwnerPressed(owner: Owner, formDirective: FormGroupDirective) {
    try {
      await this._ownersService.updateOwner(owner, this.ownedVesselList).then(() => {
        this._snackBar.open(`Updated ${owner.name}`, 'OK', { duration: 3000 })
        this.ownerForm.reset();
        formDirective.resetForm();
      });
  } catch (error) {
      console.log(error.errors);
      this._snackBar.open('An error occured when updating the action', 'OK', { duration: 3000 })
    }
  }
}
