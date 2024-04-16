// Core

import { Injectable } from '@angular/core';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { BehaviorSubject } from 'rxjs';


// Local

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
      await getCurrentUser()
      return 'connected';
    }
    catch (e) {
      return 'none';
    }
  }

  async getConnectedUserName() {
    return this.currentUserName;
  }

  //TODO: Update to v6

  async getConnectedGroup() {
    await fetchAuthSession();

    return 'ADMIN';
  }
}
