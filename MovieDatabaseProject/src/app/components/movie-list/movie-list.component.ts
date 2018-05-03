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

  constructor(private moviesService: MoviesServiceService) {
  }

  ngOnInit() {
    this.selectedMovie = null;
    this.moviesService.getMoviesList().subscribe(movies => { this.movies = movies; this.moviesCopy = movies });
  }

  onMovieSelect(selectedMovieName: string) {
    if (this.selectedMovie) {
      this.selectedMovie.isSelected = false;
    }
    this.selectedMovie = this.movies.filter(movie => movie.title == selectedMovieName)[0];
    this.selectedMovie.isSelected = true;
  }

  filterMovies(input) {
    if (input == "") {
      this.movies = this.moviesCopy;
    } else {
      this.movies = this.moviesCopy.filter(movie => movie.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
    }

  }

}
