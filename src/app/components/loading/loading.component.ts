// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Local 

import { AccountService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(private _accountService: AccountService,
    private _router: Router) {}

  async ngOnInit( ) {
    await this._accountService.getConnectedUserName();
    await this._accountService.getConnectedGroup();
    await this._accountService.getConnectedRole()

    this._router.navigate(['main/checklist']);
  }
}
