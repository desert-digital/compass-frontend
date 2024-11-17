import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

// Material 

import { MatSidenav } from '@angular/material/sidenav';

// Amplify

import { signOut } from 'aws-amplify/auth';

// Local

import { PendingService } from 'src/app/services/pending.service';
import { AccountService } from 'src/app/services/account-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild('drawer', {static: true}) sideNavDrawer: MatSidenav;

  userName: string = '';
  userRole: string = '';
  pendingItems: number = 0;

  activeButton: string = 'top';
  badgeColor: string = 'primary';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private _accountService: AccountService,
    private _pendingService: PendingService,
    private _router: Router) { }

  async ngOnInit() {
    this.onMessagesPressed();

    this._pendingService.getPendingItems();
    
    this._pendingService.numberOfPendingEvents$.subscribe((number : number) => 
      this.pendingItems = number);

    this.userName = this._accountService.currentUserName();
    this.userRole = this._accountService.currentRole();
  }
  
  async ngAfterViewInit() {
    if (this.userRole === 'Crew') {
      await this.sideNavDrawer.close();
    }
  }

  onTopPressed() {
    this.activeButton = 'top';
    this.badgeColor = 'primary';
    this._router.navigate(['main/top']);
  }

  onFleetPressed() {
    this.activeButton = 'fleet';
    this.badgeColor = 'primary';
    this._router.navigate(['main/fleet']);
  }

  onPendingPressed() {
    this.activeButton = 'pending';
    this.badgeColor = 'warn';
    this._router.navigate(['main/pending', 15]);
  }

  onMessagesPressed() {
    this.activeButton = 'messages';
    this.badgeColor = 'primary';
    this._router.navigate(['main/messages']);
  }

  onChecklistPressed() {
    this.badgeColor = 'primary';
    this._router.navigate(['main/checklist']);
  }

  onStaffPressed() {
    this.activeButton = 'staff';
    this.badgeColor = 'primary';
    this._router.navigate(['main/staff']);
  }

  onOwnersPressed() {
    this.activeButton = 'owners';
    this.badgeColor = 'primary';
    this._router.navigate(['main/owners']);
  }

  onChecklistAdminPressed() {
    this.activeButton = 'checklistAdmin';
    this.badgeColor = 'primary';
    this._router.navigate(['main/manage-checklists']);
  }

  onWorkflowAdminPressed() {
    this.activeButton = 'workflowAdmin';
    this.badgeColor = 'primary';
    this._router.navigate(['main/manage-workflows']);
  }

  onActionAdminPressed() {
    this.activeButton = 'actionAdmin';
    this.badgeColor = 'primary';
    this._router.navigate(['main/manage-actions']);
  }

  onServicesPressed() {
    this.activeButton = 'services';
    this.badgeColor = 'primary';
    this._router.navigate(['main/services', 15]);
  }

  onInventoryPressed() {
    this.activeButton = 'inventory';
    this.badgeColor = 'primary';
    this._router.navigate(['main/inventory', 15]);
  }

  onDemoPressed() {
    this.activeButton = 'demo';
    this.badgeColor = 'primary';
    this._router.navigate(['main/demo']);
  }

  async onLogoutPressed() {
    try {
      await signOut();
      this._router.navigate(['login/signin']);
      // add code to disable navigation
    }
    catch (e) {
      console.log(JSON.stringify(e));
    }
  }
}
