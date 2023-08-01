// Core

import { Injectable } from '@angular/core';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetOwnerQuery } from '../API.service';

// Local

import { Owner } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor() { }

  async getOwners(): Promise<any> {
    const owners = await API.graphql<GraphQLQuery<GetOwnerQuery>>(
      graphqlOperation(queries.listVessels)
    );
    console.log(owners);

    return owners;
  }

  async getOwnerFromId(id: string) {
    // const owner = await this.api.GetOwner(id);
    // return owner as Owner;
  }

  async createOwner(owner: Owner) {
    // await this.api.CreateOwner(owner);
  }
}
