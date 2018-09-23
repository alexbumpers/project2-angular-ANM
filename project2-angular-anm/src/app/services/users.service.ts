import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from 'src/app/models/users.model';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string = 'http:localhost:8084/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }
  
}
