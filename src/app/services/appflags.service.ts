// Core

import { Injectable } from '@angular/core';

// Amplify

import { listAppFlags, getAppFlag } from '../../graphql/queries';
import { generateClient } from '@aws-amplify/api';

// Local

import { AppFlag } from 'src/API';

@Injectable({
  providedIn: 'root'
})
export class AppflagsService {

  client = generateClient();

  constructor() { }

  async getAppFlags(): Promise<AppFlag[]> {
    const flags = await this.client.graphql({
      query: listAppFlags,
    });
    return flags.data.listAppFlags.items as AppFlag[];
  }

  async getFlagValueByName(flagName: string): Promise<string> {
    const flag = await this.client.graphql({
      query: getAppFlag,
      variables: {
        id: flagName
      }
    });
    return flag.data.getAppFlag.value as string;
  }
}
