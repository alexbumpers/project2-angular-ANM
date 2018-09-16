import { Component} from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  constructor(public nav: NavbarService) {

  }

}
