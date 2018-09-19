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

    let options ;
  }

  // search() {
  //   const BASE_URL = 'https://api.spotify.com/v1/search?';
  //   const FETCH_URL = BASE_URL + 'q=Frank&type=artist&limit=1';
  //   var accessToken = 'BQBE59HgM_JnpO-ipeLG-_57V_DjeXrS_WjVjl2PH3dnt_Iwgnzr499qf_2-MbCSi2YMU0NjOsIovhdwDPYgX89GbVJx2TK7ihvPWjynqpypgFxmBX5Qo4UbfqVf_LRdaR8yFraviG8_oKBtHto_9IG7nMaHrolsAb5I&refresh_token=AQByEuP0TAO28GOr0c77IMPxWutNLIbW4oEM9ujwlnPhnXhWPNus25GySsiz8t7vZ1L-tUT6JU-uUoYzdRNopEnB5OfTQWcLjJO2dwanI-o-7PCqXYTadH5c4wDcZzkI5FHG_A';
  //   let body = 'grant_type=client_credentials';
  //   var myHeaders = new Headers();
    
  //   // var myOptions = {
  //   //   method: 'GET',
  //   //   headers: {
  //   //     'Authorization': 'Bearer ' + accessToken
  //   //   },
  //   //   mode: 'cors',
  //   //   cache: 'default'
  //   // };

  //   var myOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer ' + accessToken
  //     })
  //   }

  //   this.http.get(FETCH_URL, myOptions).subscribe({next(result){console.log(result)}});

  //   this.http.post(FETCH_URL, body, myOptions);
  // }
}
