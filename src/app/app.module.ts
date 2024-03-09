import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page01Component } from './page01/page01.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SidebarComponent } from './sidebar/sidebar.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    SidebarComponent,
    CatalogComponent,
    MovieCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
