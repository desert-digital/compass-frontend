// Core

import { Injectable } from '@angular/core';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

import { GraphQLQuery } from '@aws-amplify/api';
import { ListVesselsQuery, GetVesselQuery, CreateVesselMutation, UpdateVesselMutation, DeleteVesselMutation } from '../API.service';

// Local

import { Vessel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  constructor() { }

  async getVessels(): Promise<Vessel[]> {
    const vesselResult = await API.graphql<GraphQLQuery<ListVesselsQuery>>(
      graphqlOperation(queries.listVessels));

    return vesselResult.data.listVessels.items as Vessel[];
  }

  async getVesselById(id: string): Promise<any> {
    const vesselResult = await API.graphql<GraphQLQuery<GetVesselQuery>>(
      graphqlOperation(queries.getVessel, { id: id })
    )

    return vesselResult.data.getVessel as Vessel;
  }

  async createVessel(vessel: Vessel, ownerId: String, workflowId: String) {
    const vesselDetails = {
      input: {
        company: '0',
        name: vessel.name,
        vesselType: vessel.vesselType,
        documentNumber: vessel.documentNumber,
        vesselDefaultWorkflowId: workflowId,
        ownerBoatsId: ownerId
      }
    }

    await API.graphql<GraphQLQuery<CreateVesselMutation>>(
      graphqlOperation(mutations.createVessel, vesselDetails)
    )
  }

  async updateVessel(vessel: Vessel) {
    const vesselDetails = {
      id: vessel.id,
      compay: vessel.company,
      name: vessel.name,
      documentNubmer: vessel.documentNumber,
      type: vessel.vesselType,
      vesselDefaultWorkflowId: vessel.vesselDefaultWorkflowId
    }

    await API.graphql<GraphQLQuery<UpdateVesselMutation>>(
      graphqlOperation(mutations.updateVessel, vesselDetails)
    )
  }

  async updateVesselWithOwner(id: String, ownerId: String) {
    const vesselOwnerDetails = {
      id: id,
      ownerBoatsId: ownerId
    }

    await API.graphql<GraphQLQuery<UpdateVesselMutation>>(
      graphqlOperation(mutations.updateVessel, vesselOwnerDetails)
    )
  }

  async deleteVessel(id: String) {
    const vesselOwnerDetails = {
      input: {
        id: id
      }
    }

    await API.graphql<GraphQLQuery<DeleteVesselMutation>>(
      graphqlOperation(mutations.deleteVessel, vesselOwnerDetails)
    )
  }
}
