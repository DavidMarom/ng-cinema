import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';

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
          'X-RapidAPI-Key': '17d09e67femsh13a073e9704' + 'fd50p186213jsn515337c5cc3' + '7',
          'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
        },
      }
    );
  }
}
