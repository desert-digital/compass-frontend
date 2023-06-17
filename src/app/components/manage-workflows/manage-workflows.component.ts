// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Local

import { WorkflowModel } from 'src/app/API.service';
import { WorkflowModelsService } from 'src/app/services/workflow-models.service';

@Component({
  selector: 'app-manage-workflows',
  templateUrl: './manage-workflows.component.html',
  styleUrls: ['./manage-workflows.component.scss']
})
export class ManageWorkflowsComponent {

  workflows: WorkflowModel[] = [];

  constructor(private router: Router,
    private _workflowModelService: WorkflowModelsService) {}
  
  async ngOnInit() {
    this.workflows = await this._workflowModelService.getWorkflowModels();
  }

  onAddNewWorkflowPressed() {
    this.router.navigate(['/main/add-workflow']);
  }
}
