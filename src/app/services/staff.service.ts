// Core

import { Injectable } from '@angular/core';

// Amplify 

import { generateClient } from '@aws-amplify/api';
import { listStaff, getStaff } from '../../graphql/queries';
import { createStaff, updateStaff, deleteStaff } from '../../graphql/mutations';

// Local

import { Staff } from 'src/API';

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
          role: staff.role
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
          phone: staff.phone,
          role: staff.role
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
        name: 'Jenny Spain',
        email: 'compass_demo_staff@gmail.com',
        phone: '+1 (856) 867-5309',
        role: 'Crew'
      } as Staff;
    this.createStaff(_staff);
    _staff =
      {
        company: 'seaforth',
        name: 'Davey Jones',
        email: 'compass_demo_staff@gmail.com',
        phone: '+1 (856) 555-1313',
        role: 'OpsManager'
      } as Staff;
    this.createStaff(_staff);
    _staff =
    {
      company: 'seaforth',
      name: 'Paolo Jorge',
      email: 'compass_demo_staff@gmail.com',
      phone: '+1 (856) 942-5311',
      role: 'ServiceManager'
    } as Staff;
  this.createStaff(_staff);
  }
}