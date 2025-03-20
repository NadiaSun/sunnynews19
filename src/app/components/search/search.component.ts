import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  imports: [MatAutocompleteModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  search: string = '';
  categories: string[] = [
    'regional',
    'technology',
    'lifestyle',
    'business',
    'general',
    'programming',
    'science',
    'entertainment',
    'world',
    'sports',
    'finance',
    'academia',
    'politics',
    'health',
    'opinion',
    'food',
    'game',
    'fashion',
    'academic',
    'travel',
    'culture',
    'economy',
    'environment',
    'art',
    'music',
    'CS',
    'education',
    'television',
    'commodity',
    'movie',
    'entrepreneur',
    'review',
    'auto',
    'energy',
    'celebrity',
    'medical',
    'gadgets',
    'design',
    'security',
    'mobile',
    'estate',
    'funny',
  ];

  public categoriesFilter(): string[] {
    return this.categories.filter((c) => c.includes(this.search.toLowerCase()));
  }
}
