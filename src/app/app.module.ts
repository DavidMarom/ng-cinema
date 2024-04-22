import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppComponent } from './app.component';
import { Page01Component } from './page01/page01.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { counterReducer } from './store/counter.reducer';

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
    StoreModule.forRoot({
      counter: counterReducer
    }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
