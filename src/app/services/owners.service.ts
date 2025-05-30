// Core

import { Injectable } from '@angular/core';

// Amplify 

import { generateClient } from '@aws-amplify/api';
import { listOwners, getOwner } from '../../graphql/queries';
import { createOwner, updateOwner, deleteOwner } from '../../graphql/mutations';

// Local

import { Owner, Vessel } from 'src/API.service';
import { FleetService } from './fleet.service';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  client = generateClient();

  constructor(private _fleetService: FleetService) { }

  async getOwners(status?: string): Promise<Owner[]> {
    if (typeof status === 'undefined') {
      const ownersResult = await this.client.graphql({ query: listOwners });
      return ownersResult.data.listOwners.items as Owner[];
    }
    else {
      const staffResult = await this.client.graphql({
        query: listOwners, variables:
          { filter: { status: { eq: status } } }
      })
      return staffResult.data.listOwners.items as Owner[];
    }
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
          company: 'compass',
          name: owner.name,
          email: owner.email,
          phone: owner.phone,
          status: 'Active'
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
          company: 'compass',
          name: owner.name,
          email: owner.email,
          phone: owner.phone,
          status: owner.status
        }
      }
    })

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

  async deactivateOwner(owner: Owner) {
    const ownerResult = await this.client.graphql({
      query: updateOwner, variables: {
        input: {
          id: owner.id,
          status: 'Inactive'
        }
      }
    })
  }

  async createDemoOwners() {
    let _owner =
      {
        company: 'compass',
        name: 'Bob McGrath',
        email: 'compass_demo_owner@gmail.com',
        phone: '+1 (856) 867-5309'
      } as Owner;
    this.createOwner(_owner);
    _owner =
      {
        company: 'compass',
        name: 'Wendy Meer',
        email: 'compass_demo_owner@gmail.com',
        phone: '+1 (856) 865-5309'
      } as Owner;
    this.createOwner(_owner);
    _owner =
      {
        company: 'compass',
        name: 'Casey Smith',
        email: 'compass_demo_owner@gmail.com',
        phone: '+1 (856) 867-5311'
      } as Owner;
    this.createOwner(_owner);
  }
}
