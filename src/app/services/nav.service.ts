import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavService {
  constructor() { }
  public page: string = '';

  setPage(page: string) {
    this.page = page;
  }
}
