// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, Checklist } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {

  constructor(private api: APIService) { }

  async getChecklists(): Promise<Checklist[]> {
    const checklists = await this.api.ListChecklists();
    return checklists.items as Checklist[];
  };

  async createChecklist(item: any) {
    await this.api.CreateChecklist(item);
  }
}


