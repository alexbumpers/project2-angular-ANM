import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    emailAddress: new FormControl(),
    password: new FormControl()
  });

  checkLogin(){
    // Will print what's currently in the fields on submit
    console.log(this.loginForm.get("emailAddress").value);
    console.log(this.loginForm.get("password").value);
  }
}
