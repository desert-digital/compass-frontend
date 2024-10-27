// Core

import { Injectable } from '@angular/core';

// Amplify 

import { generateClient } from '@aws-amplify/api';
import { listStaff, getStaff, getStaffByUserName } from '../../graphql/queries';
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
          username: staff.username,
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

  async getStaffByUsername(username: string): Promise<Staff | null> {
    const staffResult = await this.client.graphql({
      query: getStaffByUserName,
      variables: { username: username }
    });

    const staffItems = staffResult.data.getStaffByUserName.items;
    return staffItems.length > 0 ? staffItems[0] as Staff : null;
  }

  async getRoleForStaff(username: string):  Promise<string | null> {
    const user = await this.getStaffByUsername(username);
    return user?.role;
  }

  async createDemoStaff() {
    let _staff =
      {
        company: 'acme',
        name: 'Jenny Spain',
        email: 'desert.digital.us@gmail.com',
        phone: '+1 (856) 867-5309',
        username: 'acme-crew',
        role: 'Crew'
      } as Staff;
    this.createStaff(_staff);
    _staff =
      {
        company: 'acme',
        name: 'Davey Jones',
        email: 'desert.digital.us@gmail.com',
        phone: '+1 (856) 555-1313',
        username: 'acme-ops',
        role: 'OpsManager'
      } as Staff;
    this.createStaff(_staff);
    _staff =
      {
        company: 'compass',
        name: 'Paolo Jorge',
        email: 'desert.digital.us@gmail.com',
        phone: '+1 (856) 942-5311',
        username: 'compass-ops',
        role: 'OpsManager'
      } as Staff;
    this.createStaff(_staff);
  }
}