// Core

import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Local

import { PendingService } from 'src/app/services/pending.service';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})

export class WorkflowComponent {

  workflow: any;

  precharterTeamSelectControl = new FormControl(['', Validators.required]);
  precharterCaptainSelectControl = new FormControl(['', Validators.required]);

  isLinear = true;

  constructor(private activatedRoute: ActivatedRoute,
    private _pendingService: PendingService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const eventId = params.get('eventId');
      if (eventId) {
        this._pendingService.getPendingItem(eventId).then(evt => 
          this.workflow = evt);
      }
    });
  }

  onStartWorkflowPressed() {
    console.log('Precharter team member: ', this.precharterTeamSelectControl.value);
    console.log('Precharter Captain: ', this.precharterCaptainSelectControl.value);
  }
}
