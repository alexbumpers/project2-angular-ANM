import { GenrePreferenceService } from './../../services/genre-preference.service';
import { Friends } from '../../models/friends.model';
import { FriendsService } from './../../services/friends.service';
import { UsersService } from 'src/app/services/users.service';
import { Friend } from './../../models/friend';
import { Component, OnInit, ElementRef } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

import { SessionServiceService } from '../../services/session-service.service';
import { Post } from '../../models/post';

import { Users } from 'src/app/models/users.model';
import { resolve } from 'q';
import { Preference } from '../../models/genre-preference.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private elementRef: ElementRef,
    private userService: UsersService,
    private friendService: FriendsService,
    private genrePreferenceService: GenrePreferenceService,
    public nav: NavbarService) { }

  sessionId: string;
  promise: Promise<Users>;
  currUser: Users;
  friendsModel: Friends[];
  preferencesModel: Preference[];


  // Left column data
  // Can include more profile data is desired
  // Stored in currUser now
  // user_pic = 'https://pbs.twimg.com/profile_images/826914296093241344/jswv7reL_400x400.jpg';
  // username: string;

  // Center column data
  // Maybe populate w/ more as we scroll down
  posts: Post[] = new Array();

  // Right column data
  // Should only populate up to 5-10 friends
  // Too many would make the page very long
  friends: Friend[] = new Array();

  ngOnInit() {
    console.log("profile-page OnInit");
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(20, 29, 38)";
    // Get sessionId
    // this.sessionService.currentMessage.subscribe(message => this.sessionId = message);
    console.log("login: " + this.sessionId);
    console.log("praying: " + JSON.parse(sessionStorage.id));
    this.sessionId = JSON.parse(sessionStorage.id);
    if(''+this.sessionId != 'default message'){
      console.log("inside if");
      // sessionStorage.id = JSON.stringify(this.sessionId);
      // Get friendsList
      this.friendService.getFriendsByPerson(this.sessionId).subscribe((allFriends)=>{
        this.friendsModel = allFriends;
        // console.log("friends: " + this.friendsModel);
        // Retrieve data for each friend
        this.friendsModel.forEach(element => {
          // Get friend's data through userService
          this.promise = new Promise<Users>((resolve)=>{
            resolve(this.userService.getUserById(''+element.isFriendsWith));
          });
          // Process friend data and add to friends array
          this.promise.then((value)=>{
            console.log("friend: " + value);
            this.friends.push(
              new Friend(value.firstName+' '+value.lastName,
                value.pictureUrl,
                value.prefs)
            );
            if(value.prefs.length > 0){
              this.posts.push(
                new Post(value.firstName+' '+value.lastName,
                  value.pictureUrl,
                  value.aboutMe,
                  'Likes: ' + value.prefs[0].genre)
              );
            }
          });

          
        });
      });

      // Get currrent User's data
      this.promise = new Promise<Users>((resolve)=>{
        resolve(this.userService.getUserById(this.sessionId));
      });
      // Populate page with current User's data
      this.promise.then((value)=>{
        console.log(value);
        this.currUser = value;
        // this.username = this.currUser.firstName + " " + this.currUser.lastName;
        // this.user_pic = value.pictureUrl;
      });
    }

    // ngDoCheck() {
    //   console.log("profile-page DoCheck");
    // }
    this.nav.show();
  }  

  hidePost() {
    document.getElementById("post-buttons").addEventListener("click", function() {
      document.getElementById("post-unit").style.display = 'none';
    })
  }
}
