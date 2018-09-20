import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent{

  constructor(private _spotifyService: SpotifyService) { }

    searchStr: string;
    searchMusic() {
      this._spotifyService.searchMusic(this.searchStr)
      .subscribe((res) => {
        return res.artists.items;
      })
    }


}
