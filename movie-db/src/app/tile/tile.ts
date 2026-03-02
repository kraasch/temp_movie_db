import { Component } from '@angular/core';

@Component({
  selector: 'app-tile',
  imports: [],
  template: `
    <p>
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Two</button>
      <button class="btn btn-accent btn-outline">Three</button>
      tile works!
    </p>
  `,
  styles: `
    @utility btn {
      @apply rounded-full;
    }
`,
})
export class Tile {

}
