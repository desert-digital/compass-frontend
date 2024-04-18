// Core

import { Injectable } from '@angular/core';

// Amplify 

import { generateClient } from '@aws-amplify/api';
import { listOwners, getOwner } from '../../graphql/queries';
import { createOwner, updateOwner, deleteOwner } from '../../graphql/mutations';

// Local

import { Owner, Vessel } from '../API.service';
import { FleetService } from './fleet.service';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  client = generateClient();

  constructor(private _fleetService: FleetService) { }

  async getOwners(): Promise<Owner[]> {
    const ownersResult = await this.client.graphql({ query: listOwners });
    return ownersResult.data.listOwners.items as Owner[];
  }

  async getOwnerFromId(id: string): Promise<Owner> {
    const ownerResult = await this.client.graphql({ query: getOwner, variables: { id: id } })
    return ownerResult.data.getOwner as Owner;
  }

  async getVesselsForOwner(id: string): Promise<Vessel[]> {
    const ownerResult = await this.client.graphql({ query: getOwner, variables: { id: id } })
    const ownerWithVessels = ownerResult.data.getOwner as Owner;
    return ownerWithVessels.boats.items as Vessel[];
  }

  async createOwner(owner: Owner): Promise<Owner> {
    const newOwner = await this.client.graphql({
      query: createOwner,
      variables: {
        input:
        {
          company: 'seaforth',
          name: owner.name,
          email: owner.email,
          phone: owner.phone,
        }
      }
    });
    return newOwner.data.createOwner as Owner;
  }

  async updateOwner(owner: Owner, boats: Vessel[]) {
    const ownerResult = await this.client.graphql({
      query: updateOwner, variables: {
        input: {
          id: owner.id,
          company: 'seaforth',
          name: owner.name,
          email: owner.email,
          phone: owner.phone
        }
      }
    })

    console.log(ownerResult);

    for (const boat of boats) {
      this._fleetService.updateVesselWithOwner(boat, owner);
    }
  }

  async deleteOwner(owner: Owner) {
    await this.client.graphql({
      query: deleteOwner, variables: {
        input: {
          id: owner.id
        }
      }
    })
  }
}
