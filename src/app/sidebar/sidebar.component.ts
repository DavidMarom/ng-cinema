import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(
    public navService: NavService,
    private router: Router

  ) { }

  setPage(page: string) { this.navService.setPage(page) }
  isActive(page: string) { return this.navService.page === page }

  goToPage(page: string) {
    this.navService.setPage(page);
    this.router.navigate([page]);
  }

}
