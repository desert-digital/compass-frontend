// Core

import { Injectable } from '@angular/core';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

import { GraphQLQuery } from '@aws-amplify/api';
import { CreateOwnerMutation, 
  DeleteOwnerMutation, 
  GetOwnerQuery,
  ListOwnersQuery, 
  UpdateOwnerMutation
} from '../API.service';

// Local

import { Owner, Vessel } from '../API.service';
import { FleetService } from './fleet.service';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private _fleetService: FleetService) { }

  async getOwners(): Promise<Owner[]> {
    const ownersResult = await API.graphql<GraphQLQuery<ListOwnersQuery>>(
      graphqlOperation(queries.listOwners)
    );

    return ownersResult.data.listOwners.items as Owner[];
  }

  async getOwnerFromId(id: string): Promise<Owner> {
    const ownerResult = await API.graphql<GraphQLQuery<GetOwnerQuery>>(
      graphqlOperation(queries.getOwner, { id: id })
    );
    return ownerResult.data.getOwner as Owner;
  }

  async getVesselsForOwner(id: string): Promise<Vessel[]> {
    const ownerResult = await API.graphql<GraphQLQuery<GetOwnerQuery>>(
      graphqlOperation(queries.getOwner, { id: id })
    );
    const ownerWithVessels = ownerResult.data.getOwner;
    return ownerWithVessels.boats.items as Vessel[];
  }

  async createOwner(owner: any): Promise<Owner> {
    const ownerDetails = {
      input: 
      {
        company: '0', 
        name: owner.name,
        email: owner.email,
        phone: owner.phone,
      }
    }

    const newOwner = await API.graphql<GraphQLQuery<CreateOwnerMutation>>(
      graphqlOperation(mutations.createOwner, ownerDetails)
    );

    return newOwner.data.createOwner as Owner;
  }

  async updateOwner(owner: Owner, boats: Vessel[]) {
    const ownerDetails = {
      id: owner.id,
      company: owner.company,
      name: owner.name,
      email: owner.email,
      phone: owner.phone
    };

    const ownerResult = await API.graphql<GraphQLQuery<UpdateOwnerMutation>>(
      graphqlOperation(mutations.updateOwner, ownerDetails)
    );

    for (let boat of boats) {
      console.log(JSON.stringify(boat));
      this._fleetService.updateVesselWithOwner(boat.id, owner.id);
    }
  }

  async deleteOwner(owner: Owner) {
    const ownerDetails = {
      input: {
        id: owner.id
      }
    }

    await API.graphql<GraphQLQuery<DeleteOwnerMutation>>(
      graphqlOperation(mutations.deleteOwner, ownerDetails)
    );
  }
}
