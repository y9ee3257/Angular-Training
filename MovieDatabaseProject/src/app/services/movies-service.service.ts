import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movie-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators/map';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class MoviesServiceService {

  constructor(public http: HttpClient) { }

  getMoviesList(): Observable<MovieModel[]> {
    return this.http.get("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json")
      .pipe(map(response => response as MovieModel[]));
  }
}
