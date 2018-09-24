import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  dataSaved = false;
  registrationForm: FormGroup;
  allUsers$: Observable<Users[]>;

  constructor(private formBuilder:FormBuilder, private registerService: RegisterService) {
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [ Validators.required ] ],
      lastName: ['', [ Validators.required ] ],
      password: ['', [ Validators.required ] ],
      email: ['', [ Validators.required ] ],
      phoneNumber: ['', [ Validators.required ] ],
      gender: ['', [ Validators.required ] ]
    })
  }

  onFormSubmit() {
    this.dataSaved = false;
    let account = this.registrationForm.value;
    this.registerService.getAllUsers().subscribe(users => {
      let maxIndex = users.length - 1;
      let maxIndexItem = users[maxIndex];
      account.id = maxIndexItem.id + 1;
      this.createUser(account);
    });
    this.registrationForm.reset();
  }

  createUser(user: Users) {
    this.registerService.createUser(user).subscribe(
      user => {
        console.log(user);
        this.dataSaved = true;
        this.loadAllUsers();
      },
      err => {
        console.log(err);
      }
    );
  }

  loadAllUsers() {
    this.allUsers$ = this.registerService.getAllUsers();
  
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }  
  get password() {
    return this.registrationForm.get('password');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }
  get gender() {
    return this.registrationForm.get('gender');
  }

}