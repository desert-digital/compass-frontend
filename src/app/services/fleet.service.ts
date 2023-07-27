import { Injectable } from '@angular/core';

// Local

import { APIService, Vessel, Owner, WorkflowModel, ModelActionFilterInput } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  constructor(private api: APIService) { }

  async getVessels(): Promise<Vessel[]> {
    const vessels = await this.api.ListVessels();
    return vessels.items as Vessel[];
  }

  async getVesselById(id: string): Promise<Vessel> {
    const variables: ModelActionFilterInput = {
      id: { eq: id }
    };

    const vessels = await this.api.ListVessels(variables);
    return vessels.items[0] as Vessel;
  }

  async getVesselsForOwner(ownerId: string) {
    const vessels = await this.api.ListVessels();
    const vesselsForOwner = vessels.items.filter(item => item.owner.id === ownerId);

    return vesselsForOwner;
  }

  async createVessel(vessel: Vessel, workflow: WorkflowModel, owner: Owner) {
    console.log(JSON.stringify(vessel));
    console.log(JSON.stringify(workflow));
    console.log(JSON.stringify(owner));
    
    await this.api.CreateVessel(vessel);
  }
}
