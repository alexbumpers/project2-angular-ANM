import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Users } from '../models/users.model';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {
  url = "http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/users";
  constructor(private http: HttpClient) {}

  createUser(user: Users): Observable<Users> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post<Users>(this.url, user, options);
  }

  postUser(user: Users): Observable<HttpResponse<Users>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Users>(this.url, user, {
      headers: httpHeaders,
      observe: 'response'
    });
  }
  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  // putUser(user: Users): Observable<HttpResponse<Users>> {
  //   let httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.put<Users>(this.url, user, {
  //     headers: httpHeaders,
  //     observe: 'response'
  //   }
  // }
}
