// Core

import { Injectable } from '@angular/core';

// Amplify

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListChecklistsQuery, GetChecklistQuery } from '../API.service';

// Local

import { Checklist } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {

  constructor() { }

  async getChecklists(): Promise<any> {
    const checklists = await API.graphql<GraphQLQuery<ListChecklistsQuery>>(
      graphqlOperation(queries.listVessels)
    );

    return checklists;
  };

  async createChecklist(item: any) {
    // await this.api.CreateChecklist(item);
  }
}


