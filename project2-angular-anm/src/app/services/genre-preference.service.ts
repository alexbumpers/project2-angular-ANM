import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preference } from '../models/genre-preference.model';

@Injectable({
  providedIn: 'root'
})
export class GenrePreferenceService {
  url: string = 'http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/preferences';

  constructor(private http: HttpClient) { }

  getPreferencesByUserId(id: number): Observable<Preference[]>{
    return this.http.get<Preference[]>(this.url+"/"+id);
  }
}
