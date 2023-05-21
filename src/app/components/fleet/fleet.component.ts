import { Component } from '@angular/core';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify 

import { Storage } from 'aws-amplify';

// Local

import { FleetService } from 'src/app/services/fleet.service';


@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent {

  items: any[] = [];

  fileName: String = "";
  percentComplete: number = 0;

  constructor(private _fleetService: FleetService,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this._fleetService.getFleet()
      .subscribe(items => this.items = items);
  }

  async onFileSelected(event: any) {
    console.log("Upload pressed");

    const fleetFile = event.target.files[0];

    try {
      let that = this;
      await Storage.put(fleetFile.name, fleetFile, {
        progressCallback(progress: any) {
          console.log(`Uploaded: ${that.percentComplete}`);
        },
      }).then(() => {
        this._snackBar.open('Uploaded ' + fleetFile.name, 'OK', { duration: 5000 });
        return;
      });
    }
    catch (e: any) {
      this._snackBar.open(`An error occured ${e.message} saving the media item. Please contact support`, 'OK');
  }
}
}
