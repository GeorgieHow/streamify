import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: false,
  
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  selectedSearchTerm: string = 'title';
  searchQuery: string = ''; 

  @Output() searchTermChanged = new EventEmitter<{ term: string, query: string }>();

  changeSearchTerm(term: string): void {
    this.selectedSearchTerm = term.toLowerCase();
  }

  onSearch(): void {
    this.searchTermChanged.emit({ term: this.selectedSearchTerm, query: this.searchQuery });
  }
}