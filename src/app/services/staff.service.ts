// Core

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListStaffQuery } from '../API.service';

// Local

import { Staff } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  ITEMS: any = [
    "OUPV. Power boats, sail boats, and PWC qualified", 
    "Power boats, sail boats, and PWC qualified",
    "PWC qualified."
  ];

  constructor() { }

  async getStaff(): Promise<any> {
    const staff = await API.graphql<GraphQLQuery<ListStaffQuery>>(
      graphqlOperation(queries.listVessels)
    );

    return staff;
  }
}
