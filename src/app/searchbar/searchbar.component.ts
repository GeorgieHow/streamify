import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: false,
  
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  selectedSearchTerm: string = 'Change Search Term';

  changeSearchTerm(term: string): void {
    this.selectedSearchTerm = term;
  }
}
