import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesServiceService } from './services/movies-service.service';
import { Http, HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [MoviesServiceService,Http,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
