import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import {ViewEncapsulation} from '@angular/core';
import { SessionServiceService } from '../../services/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit{

  constructor(public nav: NavbarService, private sessionService: SessionServiceService, private router: Router) {

  }

  sessionId:string;

  ngOnInit() {
    this.sessionService.currentMessage.subscribe(message => this.sessionId = message);
    console.log("login: " + this.sessionId);
  }

  
  passUserSessionToEditProfilePage() {
    this.sessionService.changeMessage;
    this.router.navigateByUrl("/edit");
  }

  passUserSessionToProfilePageViaNavbar() {
    this.sessionService.changeMessage;
    this.router.navigateByUrl("/profile");
  }


}
