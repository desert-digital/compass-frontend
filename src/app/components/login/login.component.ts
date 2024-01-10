// Core

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';


// Local

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  greeting: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    history.pushState(null, null, location.href);

    fromEvent(window, 'popstate').subscribe(_ => {
       history.pushState(null, null, location.href);
    });

    this.greeting = true;
  }

  onRegisterPressed() {
    this.greeting = false;
    this.router.navigate(['signup'], { relativeTo: this.route });
  }

  onBackToLoginPressed() {
    this.greeting = true;
    this.router.navigate(['signin'], { relativeTo: this.route });
  }

  changeTopButton() {
    this.greeting = true;
  }
}
