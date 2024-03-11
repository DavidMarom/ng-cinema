import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MoviesService, NavService]
})
export class AppComponent {

  constructor(
    private moviesService: MoviesService,
    private navService: NavService
  ) { }

  title = 'cinema';
}
