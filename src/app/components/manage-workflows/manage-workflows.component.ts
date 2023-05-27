// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Local

import { WorkflowSteps } from 'src/app/API.service';
import { WorkflowStepsService } from 'src/app/services/workflow-steps.service';

@Component({
  selector: 'app-manage-workflows',
  templateUrl: './manage-workflows.component.html',
  styleUrls: ['./manage-workflows.component.scss']
})
export class ManageWorkflowsComponent {

  workflows: WorkflowSteps[] = [];

  constructor(private router: Router,
    private _workflowStepsService: WorkflowStepsService) {}
  
  async ngOnInit() {
    this.workflows = await this._workflowStepsService.getWorkflowSteps();
  }

  onAddNewWorkflowPressed() {
    // this.router.navigate(['/main/add-workflow']);
  }
}
