import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor(private http: HttpClient) { }


  getMovies() {
    return this.http.get(
      'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
      {
        params: { order_by: 'date', type: 'movie' },
        headers: {
          'X-RapidAPI-Key': environment.apiKey,
          'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
        },
      }
    );
  }
}
