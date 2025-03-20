import { Component } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { CategoriesComponent } from './components/categories/categories.component';

@Component({
  selector: 'app-root',
  imports: [
    SearchComponent,
    ToolbarComponent,
    NewsItemComponent,
    CategoriesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sunnynews19';
}
