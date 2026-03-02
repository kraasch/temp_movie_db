import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wheel',
  imports: [],
  template: `
    <div class="radial-progress text-info" style="--value:{{getProg()}};" aria-valuenow="{{getProg()}}" role="progressbar">{{progress}}/10</div>
  `,
  styles: ``,
})
export class Wheel {
  @Input() progress: string = "";
  getProg() : number {
    let p: number = parseFloat(this.progress);
    return p * 10.0;
  }
}
