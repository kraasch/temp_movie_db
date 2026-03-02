import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  imports: [],
  template: `
    <div class="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="{{ image }}"
          alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{title}} ({{culture}}, {{year}})</h2>
        <p>{{desc}}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary bnt-outline">More Info</button>
        </div>
      </div>
    </div>
  `,
  styles: `
    @utility btn {
      @apply rounded-full;
    }
`,
})
export class Tile {
  @Input() title: string = "";
  @Input() year: string = "";
  @Input() watched: string = "";
  @Input() culture: string = "";
  @Input() desc: string = "";
  @Input() image: string = "";
}
