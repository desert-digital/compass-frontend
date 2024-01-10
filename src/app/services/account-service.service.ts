// Core

import { Injectable } from '@angular/core';
import { Auth, DataStore } from 'aws-amplify';
import { BehaviorSubject, Observable, of } from 'rxjs';

// Amplify

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetActionQuery, ListActionsQuery, CreateActionMutation } from '../API.service';

// Local

import { CompassUser } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private applicationState = new BehaviorSubject<string>(null);
  private applicationUserName = new BehaviorSubject<string>(null);
  private applicationGroup = new BehaviorSubject<string>(null);

  currentState: string
  currentUserName: string
  currentGroup: string

  constructor() { }

  connect(user: string, group: string): void {
    this.changeConnectedStatus("connected");
    this.changeConnectedAccount(user);
    this.changeConnectedGroup(group);
  }

  register(user: string): void {
    this.changeConnectedStatus("registering");
    this.changeConnectedAccount(user);
  }

  disconnect(): void {
    this.changeConnectedStatus("disconnected");
    this.changeConnectedAccount(null);
  }

  changeConnectedStatus(newStatus: string) {
    this.currentState = newStatus;
  }

  changeConnectedAccount(newUser: string) {
    this.currentUserName = newUser;
  }

  changeConnectedGroup(newGroup: string) {
    localStorage.setItem('GROUP', newGroup);
    this.currentGroup = newGroup;
  }

  async getConnectedStatus() {
    try {
      const result = await Auth.currentAuthenticatedUser()
      return 'connected';
    }
    catch (e) {
      return 'none';
    }
  }

  async getConnectedUserName() {
    return this.currentUserName;
  }

  async getConnectedGroup() {
    const _session = await Auth.currentSession();
    let accessToken = _session.getAccessToken();

    if ('cognito:groups' in accessToken.payload) {
      return 'ADMIN';
    }
    else {
      return this.currentGroup;
    }
  }
}
