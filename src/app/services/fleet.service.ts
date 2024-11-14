// Core

import { Injectable } from '@angular/core';

// Amplify 

import { generateClient } from '@aws-amplify/api';
import { listVessels, getVessel } from '../../graphql/queries';
import { createVessel, updateVessel, deleteVessel } from '../../graphql/mutations';

// Local

import { Vessel, Owner } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  client = generateClient();

  constructor() { }

  async getVessels(status?: string): Promise<Vessel[]> {
    if ((typeof status === 'undefined') ||
      (status === '')) {
      const vesselResult = await this.client.graphql({ query: listVessels });
      return vesselResult.data.listVessels.items as Vessel[];
    }
    else {
      const vesselResult = await this.client.graphql({
        query: listVessels,
        variables: {
          filter: {
            status: {
              eq: status

            }
          }
        }
      });
      return vesselResult.data.listVessels.items as Vessel[];
    }
  }

  async getVesselById(id: string): Promise<Vessel> {
    const vesselResult = await this.client.graphql({
      query: getVessel,
      variables: {
        id: id
      }
    });
    return vesselResult.data.getVessel as Vessel;
  }

  async createVessel(vessel: Vessel, ownerId: string, workflowId: string) {
    await this.client.graphql({
      query: createVessel,
      variables: {
        input: {
          company: 'compass',
          name: vessel.name,
          vesselType: vessel.vesselType,
          documentNumber: vessel.documentNumber,
          vesselDefaultWorkflowId: workflowId,
          ownerBoatsId: ownerId
        }
      }
    });
  }

  async updateVessel(vessel: Vessel) {
    await this.client.graphql({
      query: updateVessel,
      variables: {
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
    });
  }

  async updateVesselWithOwner(vessel: Vessel, owner: Owner) {
    await this.client.graphql({
      query: updateVessel,
      variables: {
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
    });
  }

  async updateVesselWithoutOwner(vessel: Vessel) {
    await this.client.graphql({
      query: updateVessel,
      variables: {
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
    });
  }

  async deleteVessel(id: string) {
    await this.client.graphql({
      query: deleteVessel,
      variables: {
        input: {
          id: id
        }
      }
    });
  }

  async deactivateVessel(vessel: Vessel) {
    await this.client.graphql({
      query: updateVessel,
      variables: {
        input: {
          id: vessel.id,
          company: vessel.company,
          name: vessel.name,
          vesselType: vessel.vesselType,
          documentNumber: vessel.documentNumber,
          vesselDefaultWorkflowId: vessel.vesselDefaultWorkflowId,
          ownerBoatsId: vessel.ownerBoatsId,
          status: 'Inactive'
        }
      }
    })
  }
}
