import { GenrePreferenceService } from './../../services/genre-preference.service';
import { Friends } from '../../models/friends.model';
import { FriendsService } from './../../services/friends.service';
import { UsersService } from 'src/app/services/users.service';
import { Friend } from './../../models/friend';
import { Component, OnInit, ElementRef } from '@angular/core';

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
    private sessionService: SessionServiceService,
    private userService: UsersService,
    private friendService: FriendsService,
    private genrePreferenceService: GenrePreferenceService) { }

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
  // posts = new Array(
  //   new Post('averyveryveryverylongname',
  //     'https://puu.sh/Byfzz/f8a7cf7872.png', 
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque diam sed accumsan ultricies. Etiam tellus velit, malesuada sed gravida in, accumsan at urna.'),
  //     new Post('username',
  //     'https://puu.sh/ByfAV/5c82db1289.png', 
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque diam sed accumsan ultricies. 
  //     Etiam tellus velit, malesuada sed gravida in, accumsan at urna. Vivamus ultrices pellentesque mattis. In euismod iaculis metus, 
  //     nec gravida neque elementum in. Nam vitae libero arcu. Nullam nec interdum justo`),
  //     new Post('username',
  //     'https://puu.sh/ByfAV/5c82db1289.png', 
  //     `cat`)
  // );
  posts: Post[] = new Array();

  // Right column data
  // Should only populate up to 5-10 friends
  // Too many would make the page very long
  friends: Friend[] = new Array();

  ngOnInit() {
    console.log("profile-page OnInit");
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(20, 29, 38)";
    // Get sessionId
    this.sessionService.currentMessage.subscribe(message => this.sessionId = message);
    console.log("login: " + this.sessionId);

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
                'likes ' + value.prefs[0].genre)
            );
          }
          // Get data for newsfeed based off friends preferences
          // this.genrePreferenceService.getPreferencesByUserId(value.id).subscribe((friendPreferences)=>{
          //   this.preferencesModel = friendPreferences;
          //   friendPreferences.forEach(preference => {
          //     this.posts.push(
          //       new Post(value.firstName+' '+value.lastName,
          //         value.pictureUrl,
          //         'likes ' + value.prefs[0].genre)
          //     );
          //   });
          // });
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

  
}
