// Core

import { Injectable } from '@angular/core';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

import { GraphQLQuery } from '@aws-amplify/api';
import { ListVesselsQuery, GetVesselQuery, CreateVesselMutation, UpdateVesselMutation, DeleteVesselMutation } from '../API.service';

// Local

import { Vessel, Owner } from '../API.service';

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


  async getVesselByOwner(owner: Owner): Promise<any> {
    console.log(owner);
  }

  async createVessel(vessel: Vessel, ownerId: string, workflowId: string) {
    const vesselDetails = {
      input: {
        company: 'seaforth',
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
      input: {
        id: vessel.id,
        company: vessel.company,
        name: vessel.name,
        vesselType: vessel.vesselType,
        documentNumber: vessel.documentNumber,
        vesselDefaultWorkflowId: vessel.vesselDefaultWorkflowId,
        ownerBoatsId: vessel.ownerBoatsId
      }
    }

    await API.graphql<GraphQLQuery<UpdateVesselMutation>>(
      graphqlOperation(mutations.updateVessel, vesselDetails)
    )
  }

  async updateVesselWithOwner(vessel: Vessel, owner: Owner) {
    const vesselDetails = {
      input: {
        id: vessel.id,
        company: vessel.company,
        name: vessel.name,
        vesselType: vessel.vesselType,
        documentNumber: vessel.documentNumber,
        vesselDefaultWorkflowId: vessel.vesselDefaultWorkflowId,
        ownerBoatsId: owner.id
      }
    }

    await API.graphql<GraphQLQuery<UpdateVesselMutation>>(
      graphqlOperation(mutations.updateVessel, vesselDetails)
    )
  }

  async updateVesselWithoutOwner(vessel: Vessel) {
    const vesselDetails = {
      input: {
        id: vessel.id,
        company: vessel.company,
        name: vessel.name,
        vesselType: vessel.vesselType,
        documentNumber: vessel.documentNumber,
        vesselDefaultWorkflowId: vessel.vesselDefaultWorkflowId,
        ownerBoatsId: null
      }
    }

    await API.graphql<GraphQLQuery<UpdateVesselMutation>>(
      graphqlOperation(mutations.updateVessel, vesselDetails)
    )
  }

  async deleteVessel(id: string) {
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
