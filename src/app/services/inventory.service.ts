// Core

import { Injectable } from '@angular/core';

// Amplify

import { generateClient } from '@aws-amplify/api';
import { listInventoryItems } from '../../graphql/queries';

// Local

import { InventoryItem } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  client = generateClient();

  async getItems(): Promise<InventoryItem[]> {
    const vesselResult = await this.client.graphql({query: listInventoryItems});

    return vesselResult.data.listInventoryItems.items as InventoryItem[];
  }
}
