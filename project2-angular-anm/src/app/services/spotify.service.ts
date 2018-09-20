import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Injectable()
export class SpotifyService {

  private searchUrl: string;

  constructor(private _http: Http) {
    
  }

  searchMusic(str:string, type='artist') {
    // let headers = new Headers();

    const headerDict = {
      'Authorization': 'Bearer BQAhu6-qJ_U2uWP4H3PYSJ8s2gW3Qos_9pFCOObTUuXqg1hgU2vQwiNxO1LL4B0L7xBe7cWc5-4CTGdzFmI'
    }



    // headers.append('Authorization', 'Bearer BQCoWMj44V7Y4UWILEi5eDj7fJLvFZQ3WUiNuyb8wzwk7g_NExumlszhBOHP36umVekeJwCUe4xGgHdFJSw');
    // console.log(headers);

    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };

    console.log(requestOptions);
    
    // let options = new RequestOptions({ headers: headers });
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+ str + '&offset=0&limit=20&type='+type+'&market=US';
    console.log(this.searchUrl);
    return this._http.get(this.searchUrl, requestOptions).pipe(map((res) => res.json()));
  }
}
