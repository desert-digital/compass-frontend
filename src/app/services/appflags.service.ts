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

  private flags: AppFlag[] = [];

  constructor() { }

  async getAppFlags() {
    const flags = await this.client.graphql({
      query: listAppFlags,
    });
    this.flags = flags.data.listAppFlags.items;
  }

  getFlagValueByName(flagName: string): string {
    return (this.flags.find((item) => item.flag = flagName)).value;
  }
}
