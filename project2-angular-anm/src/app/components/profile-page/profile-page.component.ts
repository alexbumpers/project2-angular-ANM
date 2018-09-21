import { Friend } from './../../models/friend';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(20, 29, 38)";
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
    'https://puu.sh/Byfzz/f8a7cf7872.png'),
    new Friend('username',
    'https://puu.sh/ByfAV/5c82db1289.png')
  ]
}
