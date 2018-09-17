import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {
  clientId = "24491e7841d74953a7af498e102c1002";
  clientSecret = "a2a93e63f6c044ca85a18fcc5d1d0c76";

  constructor(private http: HttpClient) { }

  login(){
    let authTokenUrl = "/api/token";

    let header = new HttpHeaders();
    header = header.append("Authorization", "Basic " + btoa(this.clientId+":"+this.clientSecret));
    header = header.append("Content-Type", "application/x-www-form-urlencoded;");
  }

  searchAlbums(title: string) {
    
  }
}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { User } from '../models/user';

// @Injectable()
// export class UserService {

//   url: string = 'https://jsonplaceholder.typicode.com/users';

//   constructor(private http: HttpClient) { }

//   // getUsers(){
//   //   return this.http.get<User>(this.usersUrl);
//   // }
//   getUsers(): Observable<User[]>{
//     return this.http.get<User[]>(this.url);
//   }

//   // getUser(id: number): Promise<User>{
//   //   return this.http.get<User>(this.url + "/" + id).toPromise();
//   // }
// }
