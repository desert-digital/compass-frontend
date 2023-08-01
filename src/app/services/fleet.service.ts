// Core

import { Injectable } from '@angular/core';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetVesselQuery } from '../API.service';

// Local

import { Vessel, Owner, WorkflowModel, ModelActionFilterInput, ListVesselsQuery } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  constructor() { }

  async getVessels(): Promise<any> {
    const vessels = await API.graphql<GraphQLQuery<ListVesselsQuery>>(
      graphqlOperation(queries.listVessels)
    );
    console.log(vessels);

    return vessels;
  }

  async getVesselById(id: string): Promise<any> {
    // const variables: ModelActionFilterInput = {
    //   id: { eq: id }
    // };

  //   const vessels = await this.api.ListVessels(variables);
  //   return vessels.items[0] as Vessel;
  }

  async getVesselsForOwner(ownerId: string): Promise<any> {
    // const vessels = await this.api.ListVessels();
    // const vesselsForOwner = vessels.items.filter(item => item.owner.id === ownerId);

    // return vesselsForOwner;
  }

  async createVessel(vessel: Vessel, workflow: WorkflowModel, owner: Owner) {
  //   console.log(JSON.stringify(vessel));
    
  //   await this.api.CreateVessel({
  //     name: vessel.name,
  //     type: vessel.type,
  //     documentNumber: vessel.documentNumber,
  //     vesselDefaultWorkflowId: workflow.id
  //   });
  }
}
