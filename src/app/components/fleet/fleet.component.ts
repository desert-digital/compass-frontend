import { Component } from '@angular/core';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify 

import { Storage } from 'aws-amplify';
import awsExports from 'src/aws-exports';


@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent {
  longText: String[] = [
    `37 foot monohull sloop-rigged sailboat. Max crew of 10`, 
    `37 foot powerboat with twin outboard engines. Max crew of 8`,
    `30 foot monohull sloop-rigged sailboat. Max crew of 10`
    ];

  fileName: String = "";
  percentComplete: number = 0;

  constructor(private _snackBar: MatSnackBar) {
    
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
