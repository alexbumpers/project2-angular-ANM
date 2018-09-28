import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friends } from '../models/friends.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  url: string = "http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/friends";

  constructor(private http: HttpClient) { }

  getFriendsByPerson(id: string): Observable<Friends[]> {
    return this.http.get<Friends[]>(this.url+"/p/"+id);
  }
}
