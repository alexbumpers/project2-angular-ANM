import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthService {

  constructor (private http:HttpClient) {}

  // getUserByName() {
  //     let url="https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V";
  //     // let header=new Headers({'Authorization': 
  //     //     'Bearer '+ "BQBQJyUjxTOKxt5b8k7nKJvIx6dw-cIWkWq55EqvOYB1QuEMthJkLmu-UBsCFJrEJ--P7okbON-KRJSm034"});
  //     let headers =  {headers: new  HttpHeaders({ 'Authorization': 
  //     'Bearer '+ "BQBQJyUjxTOKxt5b8k7nKJvIx6dw-cIWkWq55EqvOYB1QuEMthJkLmu-UBsCFJrEJ--P7okbON-KRJSm034"})};
  //     return this.http.get(url, {headers: headers});
  // }

}
