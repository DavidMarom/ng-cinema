import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
          'X-RapidAPI-Key': '17d09e67femsh13a073e9704fd50p186213jsn515337c5cc37',
          'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
        },
      }
    );
  }
}
