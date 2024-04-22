import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../store/counter.actions';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})

export class MovieCardComponent {
  @Input() movie: any;

  count$: Observable<number>;

  increment() {
    this.store.dispatch(increment());
  }

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }
}
