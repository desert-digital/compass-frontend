import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})

export class WorkflowComponent {

  vessel: string = 'La Barca';
  location: string = 'Downtown';
  starting: Date = new Date();

  precharterTeamSelectControl = new FormControl(['', Validators.required]);
  precharterCaptainSelectControl = new FormControl(['', Validators.required]);

  isLinear = true;

  constructor(private _formBuilder: FormBuilder) { }

  onStartWorkflowPressed() {
    console.log('Precharter team member: ', this.precharterTeamSelectControl.value);
    console.log('Precharter Captain: ', this.precharterCaptainSelectControl.value);
  }
}
