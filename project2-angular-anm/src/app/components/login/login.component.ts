// import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../../Users';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;
  response: any;

  constructor(private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {  }

    ngOnInit() {}


    login(){
  
      
      const headers = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Credentials': 'true'
        }), withCredentials:true
      };   
  
      let body = `email=${this.email}&password=${this.password}`;
  
      this.httpClient.post("http://localhost:8080/logins",body,  headers )
      .subscribe( (data:any) => {
        this.response = data;
        console.log(this.response);
        this.getSession();
        if(this.response){
          this.router.navigateByUrl('/profile');
        }
      });
  
    }

    getSession() {
      this.httpClient.get("http://localhost:8080/session", {withCredentials:true})
        .subscribe( (data:any) => {
          this.response = data;
          console.log(this.response);
        });
    }
  
  
}












/// THIS IS THE ORIGINAL
//   constructor(private userService: UsersService, private router: Router) { }

//   ngOnInit() {
//   }

//   loginForm = new FormGroup({
//     emailAddress: new FormControl(),
//     password: new FormControl()
//   });
  
//   user: Users;
  
//   checkLogin(){
//     let email = this.loginForm.get("emailAddress").value;
//     let password = this.loginForm.get("password").value;
//     var id = -1;

//     let promise = new Promise<Users>((resolve) => {
//       resolve(this.userService.getUser(email, password));
//     });

//     promise.then((value)=>{
//       this.user = value;
//       // console.log(this.user.password);

//       if(this.user.password === password){
//         id = this.user.id;
//         console.log(id);
//       }
//     });

//     if(id != -1){
//       promise = new Promise<Users>((resolve) => {
//         resolve(this.userService.loginValid(id));
//       });
//     }

//     promise.then((value)=>{
//       if(value.id == id){
//         console.log("cool");
//         this.router.navigateByUrl("/profile");
//       }
//     })

//     // this.userService.getUser(email, password)subscribe((value) =>{
//     //   console.log(value);
//     // });


//   }
// }























// WORKS!!!!!!!
// import { Router } from '@angular/router';
// import { UsersService } from 'src/app/services/users.service';
// import { FormGroup, FormControl } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
// import { Users } from '../../../Users';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor(private userService: UsersService, private router: Router) { }

//   ngOnInit() {
//   }

//   loginForm = new FormGroup({
//     emailAddress: new FormControl(),
//     password: new FormControl()
//   });
  
//   user: Users;
  
//   checkLogin(){
//     let email = this.loginForm.get("emailAddress").value;
//     let password = this.loginForm.get("password").value;
//     var id = -1;
//     // console.log(email);
//     // console.log(password);

//     let promise = new Promise<Users>((resolve) => {
//       resolve(this.userService.getUser(email, password));
//     });

//     promise.then((value)=>{
//       this.user = value;
//       // console.log(this.user.password);

//       if(this.user.password === password){
//         id = this.user.id;
//         console.log(id);
//       }
//     });

//     if(id != -1){
//       promise = new Promise<Users>((resolve) => {
//         resolve(this.userService.loginValid(id));
//       });
//     }

//     promise.then((value)=>{
//       if(value.id == id){
//         console.log("cool");
//         this.router.navigateByUrl("/profile");
//       }
//     })

//     // this.userService.getUser(email, password)subscribe((value) =>{
//     //   console.log(value);
//     // });


//   }
// }
