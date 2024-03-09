import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MoviesService]
})
export class AppComponent {

  constructor(private moviesService: MoviesService) { }

  title = 'cinema';
}
