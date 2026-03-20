
import { Component, signal } from  '@angular/core';
import { RouterOutlet }      from  '@angular/router';
import { FilterBar }         from './filterbar/filterbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilterBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('movie-db');
}
