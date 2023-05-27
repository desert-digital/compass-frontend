import { Injectable } from '@angular/core';

// Local

import { APIService, WorkflowSteps } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class WorkflowStepsService {

  constructor(private api: APIService) { }

  async getChecklistSteps(): Promise<WorkflowSteps[]> {
    const events = await this.api.ListWorkflowSteps();
    return events.items as WorkflowSteps[];
  }
}
