
import { Component, Input } from '@angular/core';
import { HoverImg } from '../hoverimg/hoverimg';
import { Wheel } from '../wheel/wheel';

@Component({
  selector: 'app-tile',
  imports: [ HoverImg, Wheel ],
  template: `
    <div class="card bg-base-100 w-96 shadow-sm">
      <figure>
        <!--
        <app-hoverimg imgUrl="{{image}}"/>
        -->
        <app-hoverimg imgUrl="https://flxt.tmsimg.com/assets/p12407944_p_v10_ac.jpg"/>
        <app-wheel progress="{{rating}}"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{title}} ({{fullLocation(culture)}}{{year}})</h2>
        <p>{{desc}}</p>
        <div class="card-actions justify-end">
          <a target="_blank" rel="noopener noreferrer" href="{{imdb}}">
          <button class="btn btn-primary bnt-outline">{{rating}} on IMDB</button>
          </a>
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
  @Input() rating: string = "";
  @Input() imdb: string = "";
  private fullPlaceNames: {[key: string]: string} = {
    jp: 'Japan',
    us: 'USA',
    de: 'Germany',
    it: 'Italy',
    fr: 'France',
    ko: 'Korea',
    sv: 'Sweden',
    mx: 'Mexico',
  };
  fullLocation(culture: string) : string {
    let res: string = "";
    if (culture in this.fullPlaceNames) {
      res = this.fullPlaceNames[culture] + ", "
    }
    return res;
  }
}

