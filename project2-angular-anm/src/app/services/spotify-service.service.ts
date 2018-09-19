import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {
  client_id = '24491e7841d74953a7af498e102c1002'; // Your client id
  client_secret = 'a2a93e63f6c044ca85a18fcc5d1d0c76'; // Your secret
  redirect_uri = 'http://localhost:8888/callback/'; // Your redirect uri
  scope = 'user-read-private user-read-email';
  accessToken: any;  

  constructor(private http: HttpClient) { }

  requestAuth(){
    let authTokenUrl = "https://accounts.spotify.com/authorize?" +
    JSON.stringify({
      response_type: 'code',
      client_id: this.client_id,
      scope: this.scope,
      redirect_uri: this.redirect_uri
    })
    // + "client_id=" + this.client_id 
    //   + "response_type=code&"
    //   + "redirect_uri=";

    // let header = new HttpHeaders();
    // header = header.append("Authorization", "Basic " + btoa(this.client_id+":"+this.client_secret));
    // header = header.append("Content-Type", "application/x-www-form-urlencoded;");
    console.log(authTokenUrl)
    return this.http.get(authTokenUrl);
  }
}
