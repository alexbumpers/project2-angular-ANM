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

  posts = [
    new Post('username',
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
}
