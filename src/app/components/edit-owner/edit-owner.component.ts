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

  owner: Owner; 

  vesselList: Vessel[] = [];
  ownedVesselList: Vessel[] = [];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
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
    await this._setUp();
  }

  async _setUp() {
    const id = this.route.snapshot.paramMap.get('id');
    this.owner = await this._ownersService.getOwnerFromId(id);

    this.vesselList = await this._fleetService.getVessels();
    this.ownedVesselList = this.owner.boats.items;

    this.ownerForm.setValue({
      id: this.owner.id,
      name: this.owner.name,
      phone: this.owner.phone,
      email: this.owner.email,
      vessels: this.ownedVesselList
    });
  }

  isOwned(o1: any, o2: any): boolean {
    return o1 && o2 ? o1 == o2.id : false;
  }

  onVesselChanged(event: any) {
    if (event.source.selected) {
      const newVessel = this.vesselList.find(item => item.id === event.source.value);
      const newVesselIndex = this.ownerForm.value.vessels.findIndex(item => item.id === newVessel.id);
      if (newVesselIndex === -1) {
        this.ownerForm.value.vessels.push(newVessel);
        this._fleetService.updateVesselWithOwner(newVessel,this.owner);
        this._snackBar.open(`Added ${newVessel.name}`, 'OK', { duration: 3000 });
      }
    }
    else {
      const newVessel = this.vesselList.find(item => item.id === event.source.value);
      this.ownerForm.value.vessels = this.ownerForm.value.vessels.filter(item => item.id === event.source.value);
      this._fleetService.updateVesselWithoutOwner(newVessel);
      this._snackBar.open(`Removed ${newVessel.name}`, 'OK', { duration: 3000 });
    }
    this.ownedVesselList = this.ownerForm.value.vessels;
  }

  async onUpdateOwnerPressed(owner: Owner, formDirective: FormGroupDirective) {
    try {
      await this._ownersService.updateOwner(owner, this.ownedVesselList).then(() => {
        this._snackBar.open(`Updated ${owner.name}`, 'OK', { duration: 3000 })
        this.router.navigate(['/main/owners']);
      });
    } catch (error) {
      console.log(JSON.stringify(error.errors));
      this._snackBar.open('An error occured when updating the action', 'OK', { duration: 3000 })
    }
  }
}
