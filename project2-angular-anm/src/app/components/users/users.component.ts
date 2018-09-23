import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor( private usersService: UsersService) { }
    
  ngOnInit() {
  }

  users: Users[];
  getUsers() {
    this.usersService.getUsers()
    .subscribe((allUsers) => this.users = allUsers);
  }
}