// Core

import { Injectable } from '@angular/core';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

import { GraphQLQuery } from '@aws-amplify/api';
import {
  CreateStaffMutation,
  DeleteStaffMutation,
  GetStaffQuery,
  ListStaffQuery,
  UpdateStaffMutation
} from '../API.service';

// Local

import { Staff } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }

  async getStaff(): Promise<any[]> {
    const staffResult = await API.graphql<GraphQLQuery<ListStaffQuery>>(
      graphqlOperation(queries.listStaff)
    );

    return staffResult.data.listStaff.items as Staff[];
  }

  async getStaffFromId(id: string): Promise<any>{
    const staffResult = await API.graphql<GraphQLQuery<GetStaffQuery>>(
      graphqlOperation(queries.getStaff, { id: id })
    );
    return staffResult.data.getStaff as Staff;
  }

  async createStaff(staff: Staff) {
    const staffDetails = {
      input:
      {
        company: 'seaforth',
        name: staff.name,
        email: staff.email,
        phone: staff.phone,
      }
    }

    const newStaff = await API.graphql<GraphQLQuery<CreateStaffMutation>>(
      graphqlOperation(mutations.createStaff, staffDetails)
    );

    return newStaff.data.createStaff as Staff;
  }

  async updateStaff(staff: Staff) {
    const staffDetails = {
      input: {
        id: staff.id,
        company: 'seaforth',
        name: staff.name,
        email: staff.email,
        phone: staff.phone
      }
    };

    const staffResult = await API.graphql<GraphQLQuery<UpdateStaffMutation>>(
      graphqlOperation(mutations.updateStaff, staffDetails)
    );
    console.log(staffResult);
  }

  async deleteStaff(staff: Staff) {
    const staffDetails = {
      input: {
        id: staff.id
      }
    }

    await API.graphql<GraphQLQuery<DeleteStaffMutation>>(
      graphqlOperation(mutations.deleteStaff, staffDetails)
    );
  }
}
