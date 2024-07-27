// Core

import { Injectable } from '@angular/core';

// Amplify

import { getAppFlag } from '../../graphql/queries';
import { generateClient } from '@aws-amplify/api';

// Local


@Injectable({
  providedIn: 'root'
})
export class AppflagsService {

  client = generateClient();

  constructor() { }

  async getFlagValue(flagName: string): Promise<string> {
    const action = await this.client.graphql({
      query: getAppFlag,
      variables: {
        id: flagName
      }
    });
    return action.data.getAppFlag.value as string;
  }
}
