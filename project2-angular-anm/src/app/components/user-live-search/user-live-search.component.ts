import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-live-search',
  templateUrl: './user-live-search.component.html',
  styleUrls: ['./user-live-search.component.css']
})
export class UserLiveSearchComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(33, 33, 33)";
  }

}
