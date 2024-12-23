import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-moviedetails',
  standalone: false,
  
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe((movie) => {
        this.movie = movie;
      });
    }
  }
}