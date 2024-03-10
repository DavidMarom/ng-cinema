import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  constructor(private moviesService: MoviesService) { }
  public movies: any = {};
  ngOnInit(): void {
    this.movies = localStorage.getItem('movies');
    if (!this.movies) {
      this.moviesService.getMovies().subscribe((data) => {
        this.movies = data;
        localStorage.setItem('movies', JSON.stringify(data));
      });
    }
    else {
      this.movies = JSON.parse(this.movies);
    }
  }
}
