import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private _router: Router) { }


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
}