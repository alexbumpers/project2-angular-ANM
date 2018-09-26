import { Component, OnInit, ElementRef } from '@angular/core';
import { SessionServiceService } from '../../services/session-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private elementRef: ElementRef,
    private sessionService: SessionServiceService) { }

  sessionId:string;

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(20, 29, 38)";
    this.sessionService.currentMessage.subscribe(message => this.sessionId = message);
    console.log("login: " + this.sessionId);
  }

}
