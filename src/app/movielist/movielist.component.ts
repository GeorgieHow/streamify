import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movielist',
  standalone: false,
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent implements OnInit {
  movies: Movie[] = [];  

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieService.getAllMovies()
      .subscribe(resp => {
        console.log('Fetched movies');
        console.log(resp);
        this.movies = resp;  
      });
  }
}