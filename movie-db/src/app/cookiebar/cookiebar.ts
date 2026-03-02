import { Component } from '@angular/core';

@Component({
  selector: 'app-cookiebar',
  imports: [],
  template: `
    <div id="myalert" role="alert" class="alert alert-vertical sm:alert-horizontal">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>This page does not use any cookies.</span>
      <div>
        <button (click)="hideTheAlert()" class="btn btn-sm btn-secondary">Accept it or Not</button>
      </div>
    </div>
  `,
  styles: ``,
})
export class CookieBar {

  hideTheAlert() {
    let elem = document.getElementById("myalert");
    if (elem != null) {
      elem.style.display = "none";
    }
  }

}
