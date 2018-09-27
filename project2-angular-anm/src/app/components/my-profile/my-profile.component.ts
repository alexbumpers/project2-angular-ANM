import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { SessionServiceService } from '../../services/session-service.service';
import { Users } from 'src/app/models/users.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyProfileComponent implements OnInit {
  dataSaved = false;
  editProfileForm: FormGroup;
  allUsers$: Observable<Users[]>;

  constructor(public nav: NavbarService, private sessionService: SessionServiceService,
     private formBuilder: FormBuilder,  private registerService: RegisterService) { }
  sessionId:string;

  ngOnInit() {
    
    this.nav.show();
    this.editProfileForm = this.formBuilder.group({
      firstName: ['', [ Validators.required ] ],
      lastName: ['', [ Validators.required ] ],
      password: ['', [ Validators.required ] ],
      email: ['', [ Validators.required ] ],
      phoneNumber: ['', [ Validators.required ] ],
      gender: ['', [ Validators.required ] ],
      orientation: ['', [ Validators.required ] ],
      aboutMe:  ['', [ Validators.required ] ],
    })
      // location: this.formBuilder.group({
      //   city: ['', [ Validators.required ] ],
      //   state: ['', [ Validators.required ] ]
      // })
    this.sessionService.currentMessage.subscribe(message => this.sessionId = message);
    console.log("login: " + this.sessionId);
  }

  // onChangesSavedSubmit() {
  //   this.dataSaved = false;
  //   let formVal = this.editProfileForm.value;
  //   this.registerService.putUser(formVal);
  // }

}

// change message with current id when edit profile button is clicked, then execute navigate, then pull id