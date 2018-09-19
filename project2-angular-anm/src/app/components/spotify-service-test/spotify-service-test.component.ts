import { SpotifyServiceService } from './../../services/spotify-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-service-test',
  templateUrl: './spotify-service-test.component.html',
  styleUrls: ['./spotify-service-test.component.css']
})
export class SpotifyServiceTestComponent implements OnInit {

  constructor(private spotifyService: SpotifyServiceService) { }

  ngOnInit() {
  }

  // getAuth(){
  //   console.log(this.spotifyService.login());
  // }

}
