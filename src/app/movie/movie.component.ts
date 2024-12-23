import { Component, Input } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie',
  standalone: false,
  
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() movie: Movie;
  constructor() {
    this.movie = {
      id:'', 
      title:'',
      genre: '',
      releaseYear: 0,
      director: '',
      rating: 0,
      description: ''
    }
  }
}
