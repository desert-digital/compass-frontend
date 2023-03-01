import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})

export class WorkflowComponent {

  vessel: string = 'Charter 1';
  location: string = 'Coronado';
  starting: Date = new Date(2023, 3, 18, 10, 0, 0);

  precharterTeamSelectControl = new FormControl(['', Validators.required]);
  precharterCaptainSelectControl = new FormControl(['', Validators.required]);

  isLinear = true;

  constructor(private _formBuilder: FormBuilder) { }

  onStartWorkflowPressed() {
    console.log('Precharter team member: ', this.precharterTeamSelectControl.value);
    console.log('Precharter Captain: ', this.precharterCaptainSelectControl.value);
  }
}
