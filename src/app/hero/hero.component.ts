import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export default class HeroComponent {
  initials: string[] = ['JW', 'WW', 'CW'];
  names: string[] = ['Jenny Wilson', 'Wade Warren', 'Cameron Williamson'];
  lastSeens: string[] = ['Today, 12.30 pm', 'Today, 12.30 pm', 'Today, 12.30 pm'];
  amounts: number[] = [-190, +870, +1200];
}
