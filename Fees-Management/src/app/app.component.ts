import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { RouterAnimation} from './RouterAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    RouterAnimation
  ]
})
export class AppComponent {
  title = 'Fees-Management';
  constructor(private contexts: ChildrenOutletContexts) {}

getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
}
