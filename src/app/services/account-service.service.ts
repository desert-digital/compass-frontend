// Core

import { Injectable, signal } from '@angular/core';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';

// Amplify 

// Local

import { StaffService } from './staff.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public currentState = signal('');
  public currentUserName = signal(' ');
  public currentGroup = signal(' ');
  public currentRoles = signal(' ');

  constructor(private _staffService: StaffService) {}

  connect(role: string): void {
    this.getConnectedUserName();
    this.getConnectedGroup();
    this.changeConnectedRole(role);
  }

  // Maybe use this to check for existing user names?

  register(user: string): void {
    this.changeConnectedAccount(user);
  }

  disconnect(): void {
    this.currentUserName.set(' ');
    this.currentGroup.set(' ');
  }

  changeConnectedAccount(newUser: string) {
    this.currentUserName.set(newUser);
  }

  changeConnectedGroup(newGroup: string) {
    this.currentGroup.set(newGroup);
  }

  changeConnectedRole(newRole: string) {
    this.currentRoles.set(newRole);
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
    await getCurrentUser().then((user) => {
      this.currentUserName.set(user.username);
    })
    return this.currentUserName();
  }

  async getConnectedGroup(): Promise<string | null> {
    try {
      const { tokens } = await fetchAuthSession();

      if (tokens?.accessToken?.payload['cognito:groups']) {
        const groups = tokens.accessToken.payload['cognito:groups'];
        if (Array.isArray(groups) && groups.length > 0) {
          const firstGroup = groups[0].toString();
          this.currentGroup.set(firstGroup);
          return firstGroup;
        }
        else {
          this.currentGroup.set(null);
          return null;
        }
      }
      else {
        this.currentGroup.set(null);
        return null
      }
    } catch (error) {
      console.error('Error getting user group:', error);
      this.currentGroup.set(null);
      return null;
    }
  }

  async getConnectedRole() {
    const role = await this._staffService.getRoleForStaff(this.currentUserName().valueOf());
    this.currentRoles.set(role);
  }
}
