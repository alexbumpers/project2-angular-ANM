import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { SessionServiceService } from '../../services/session-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyProfileComponent implements OnInit {

  constructor(public nav: NavbarService, private sessionService: SessionServiceService) { }
  sessionId:string;

  ngOnInit() {
    this.nav.show();
    this.sessionService.currentMessage.subscribe(message => this.sessionId = message);
    console.log("login: " + this.sessionId);
  }

}

// change message with current id when edit profile button is clicked, then execute navigate, then pull id