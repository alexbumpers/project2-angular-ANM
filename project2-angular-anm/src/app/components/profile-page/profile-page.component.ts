import { Friend } from './../../models/friend';
import { Component, OnInit, ElementRef } from '@angular/core';

import { SessionServiceService } from '../../services/session-service.service';
import { Post } from '../../models/post';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private elementRef: ElementRef,
    private sessionService: SessionServiceService, public nav: NavbarService, private router: Router) { }

  sessionId:string;
  

  ngOnInit() {
    this.nav.show();
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(20, 29, 38)";
    this.sessionService.currentMessage.subscribe(message => this.sessionId = message);
    console.log("login: " + this.sessionId);
    
  }

  passUserSessionToEditProfilePage() {
    this.sessionService.changeMessage;
    this.router.navigateByUrl("/edit");
  }

  // Left column data
  // Can include more profile data is desired
  user_pic = 'https://pbs.twimg.com/profile_images/826914296093241344/jswv7reL_400x400.jpg';
  username = 'Aaaaaaaaaaaaaaaaaaaaaveryveryverylong User Name';

  // Center column data
  // Maybe populate w/ more as we scroll down
  posts = [
    new Post('averyveryveryverylongname',
      'https://puu.sh/Byfzz/f8a7cf7872.png', 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque diam sed accumsan ultricies. Etiam tellus velit, malesuada sed gravida in, accumsan at urna.'),
      new Post('username',
      'https://puu.sh/ByfAV/5c82db1289.png', 
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque diam sed accumsan ultricies. 
      Etiam tellus velit, malesuada sed gravida in, accumsan at urna. Vivamus ultrices pellentesque mattis. In euismod iaculis metus, 
      nec gravida neque elementum in. Nam vitae libero arcu. Nullam nec interdum justo`),
      new Post('username',
      'https://puu.sh/ByfAV/5c82db1289.png', 
      `cat`)
  ];

  // Right column data
  // Should only populate up to 5-10 friends
  // Too many would make the page very long
  friends = [
    new Friend('averyveryveryverylongname',
    'https://puu.sh/Byfzz/f8a7cf7872.png',
    []),
    new Friend('username',
    'https://puu.sh/ByfAV/5c82db1289.png',
    [])
  ]
}
