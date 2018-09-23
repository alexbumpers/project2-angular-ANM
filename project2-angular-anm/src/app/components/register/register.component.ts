import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users.model';
import { UsersService } from '../../services/users.service';
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

  // constructor(private formBuilder:FormBuilder, private registerService: RegisterService) {
  // }

  constructor(private formBuilder:FormBuilder, private registerService: RegisterService) {
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [ Validators.required ] ],
      lastName: ['', [ Validators.required ] ],
      password: ['', [ Validators.required ] ],
      email: ['', [ Validators.required ] ],
      phoneNumber: ['', [ Validators.required ] ]
    })

    // this.saveUser();
  }

  onFormSubmit() {
    this.dataSaved = false;
    let account = this.registrationForm.value;
    this.registerService.getAllUsers().subscribe(users => {
      let maxIndex = users.length - 1;
      let maxIndexItem = users[maxIndex];
      account.id = maxIndexItem.id + 10;
      //
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

}














// saveUser() {

// }


// export class RegisterComponent implements OnInit {

//   registerForm: FormGroup;
//   loading = false;
//   submitted = false;

//   constructor(
//     private formBuilder: FormBuilder
//   ) {


    
//    }

//   ngOnInit() {
//     this.registerForm = this.formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       username: ['', Validators.required],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//   });
//   }

//      // convenience getter for easy access to form fields
//   get f() {
//     return this.registerForm.controls;
//   }

//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }

//     this.loading = true;
//     // this.registerService.register(this.registerForm.value)
//     //     .pipe(first())
//     //     .subscribe(
//     //         data => {
//     //             this.alertService.success('Registration successful', true);
//     //             this.router.navigate(['/login']);
//     //         },
//     //         error => {
//     //             this.alertService.error(error);
//     //             this.loading = false;
//     //         });
// }


// }
