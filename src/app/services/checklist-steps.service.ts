// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, ChecklistSteps } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ChecklistStepsService {

  constructor(private api: APIService) { }

  async getChecklistSteps(): Promise<ChecklistSteps[]> {
    const events = await this.api.ListChecklistSteps();
    return events.items as ChecklistSteps[];
  }
}
