import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

// Amplify

import { Amplify, Auth, Storage } from 'aws-amplify';

// Local

import { PendingService } from 'src/app/services/pending.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Output() logoutEvent = new EventEmitter();

  pendingItems: number = 0;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private _pendingService: PendingService,
    private _router: Router) { }


  async ngOnInit() {
    this.onHomePressed();

    const items = this._pendingService.getPendingItems();
    
    this._pendingService.numberOfPendingEvents$.subscribe((number : any) => 
      this.pendingItems = number);
  }

  onHomePressed() {
    this._router.navigate(['main/home']);
  }

  onFleetPressed() {
    this._router.navigate(['main/fleet']);
  }

  onPendingPressed() {
    this._router.navigate(['main/pending']);
  }

  onStaffPressed() {
    this._router.navigate(['main/staff']);
  }

  onOwnersPressed() {
    this._router.navigate(['main/owners']);
  }

  onChecklistPressed() {
    this._router.navigate(['main/checklists']);
  }

  onWorkflowPressed() {
    this._router.navigate(['main/workflows']);
  }

  onServicesPressed() {
    this._router.navigate(['main/services']);
  }

  onActionsPressed() {
    this._router.navigate(['main/actions']);
  }

  async onLogoutPressed() {
    try {
      await Auth.signOut();
      // add code to disable navigation
    }
    catch (e) {
      console.log(JSON.stringify(e));
    }
  }
}
