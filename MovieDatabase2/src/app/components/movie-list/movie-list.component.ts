import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../services/movies-service.service';
import { MovieModel } from '../../models/movie-model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  moviesCopy: MovieModel[];
  movies: MovieModel[];
  selectedMovie: MovieModel;
  isList: boolean = true;

  constructor(private moviesService: MoviesServiceService) {
  }

  ngOnInit() {
    this.selectedMovie = null;
    this.moviesService.getMoviesList().subscribe(movies => { this.movies = movies; this.moviesCopy = movies });
  }

  toggleView() {
    this.isList = !this.isList;
  }

}
