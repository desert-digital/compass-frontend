// Core

import { Injectable } from '@angular/core';

// Amplify 

import { generateClient } from '@aws-amplify/api';
import { listStaff, getStaff } from '../../graphql/queries';
import { createStaff, updateStaff, deleteStaff } from '../../graphql/mutations';

// Local

import { Staff } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  client = generateClient();

  constructor() { }

  async getStaff(): Promise<Staff[]> {
    const staffResult = await this.client.graphql({ query: listStaff })
    return staffResult.data.listStaff.items as Staff[];
  }

  async getStaffFromId(id: string): Promise<Staff> {
    const staffResult = await this.client.graphql({ query: getStaff, variables: { id: id } });
    return staffResult.data.getStaff as Staff;
  }

  async createStaff(staff: Staff) {
    const newStaff = await this.client.graphql({
      query: createStaff, variables: {
        input:
        {
          company: 'seaforth',
          name: staff.name,
          email: staff.email,
          phone: staff.phone,
        }
      }
    });
    return newStaff.data.createStaff as Staff;
  }

  async updateStaff(staff: Staff) {
    const staffResult = await this.client.graphql({
      query: updateStaff,
      variables: {
        input: {
          id: staff.id,
          company: 'seaforth',
          name: staff.name,
          email: staff.email,
          phone: staff.phone
        }
      }
    });
    console.log(staffResult);
  }

  async deleteStaff(staff: Staff) {
    await this.client.graphql({
      query: deleteStaff,
      variables: {
        input: {
          id: staff.id
        }
      }
    });
  }

  async createDemoStaff() {
    let _staff =
      {
        company: 'seaforth',
        name: 'Demo Staff #1',
        email: 'compass_demo_staff@gmail.com',
        phone: '000000000000'
      } as Staff;
    this.createStaff(_staff);
    _staff =
      {
        company: 'seaforth',
        name: 'Demo Staff #2',
        email: 'compass_demo_staff@gmail.com',
        phone: '000000000000'
      } as Staff;
    this.createStaff(_staff);
    _staff =
    {
      company: 'seaforth',
      name: 'Demo Staff #3',
      email: 'compass_demo_staff@gmail.com',
      phone: '000000000000'
    } as Staff;
  this.createStaff(_staff);
  }
}