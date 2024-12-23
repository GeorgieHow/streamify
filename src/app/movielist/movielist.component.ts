import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movielist',
  standalone: false,
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieService.getAllMovies()
      .subscribe(resp => {
        console.log('Fetched movies');
        console.log(resp);
        this.movies = resp;
        this.filteredMovies = resp; 
      });
  }

  onSearch(searchData: { term: string, query: string }): void {
    const { term, query } = searchData;
    console.log(term);

    if (!query) {
      this.filteredMovies = this.movies;
      return;
    }

    this.filteredMovies = this.movies.filter(movie => {
      const movieValue = (movie as any)[term]?.toString().toLowerCase();
      return movieValue && movieValue.includes(query.toLowerCase());
    });
  }

  goToMovieDetails(id: string): void {
    this.router.navigate([`/movie/${id}`]);
  }
}