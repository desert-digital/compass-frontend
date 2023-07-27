// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, Owner } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private api: APIService) { }

  async getOwners() {
    const owners = await this.api.ListOwners();
    return owners.items as Owner[];
  }

  async getOwnerFromId(id: string) {
    const owner = await this.api.GetOwner(id);
    return owner as Owner;
  }

  async createOwner(owner: Owner) {
    await this.api.CreateOwner(owner);
  }
}
