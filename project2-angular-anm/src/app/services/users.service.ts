import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Users } from 'src/app/models/users.model';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string = 'http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/users';
  loginUrl:string = 'http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/logins';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  getUserById(id: string): Promise<Users>{
    return this.http.get<Users>(this.url+"/"+id).toPromise();
  }

  getUser(userEmail: string, userPassword: string): Promise<Users>{
    return this.http.get<Users>(this.url+"/byemail/"+userEmail).toPromise();
    // let body = {
    //   emailAddress: userEmail,
    //   password: userPassword
    // }
    // let user = new Users(null, null, null, userEmail, userPassword,null);
    // console.log(user);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // };
    // return this.http.post<Users>(this.loginUrl, user, httpOptions);
  }

  loginValid(id: number): Promise<Users>{
    return this.http.get<Users>(this.url+"/logins/"+id).toPromise();
  }
  
}
