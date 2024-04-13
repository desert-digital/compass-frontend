import { Injectable } from '@angular/core';

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

import { GraphQLQuery } from '@aws-amplify/api';
import { ListInventoryItemsQuery } from '../API.service';

import { InventoryItem } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  async getItems(): Promise<InventoryItem[]> {
    const vesselResult = await API.graphql<GraphQLQuery<ListInventoryItemsQuery>>(
      graphqlOperation(queries.listVessels));

    return vesselResult.data.listInventoryItems.items as InventoryItem[];
  }
}
