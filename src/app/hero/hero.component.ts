import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  users: User[] = [
    new User('JW', 'Jenny Wilson', 'Today, 12.30 pm', -190),
    new User('WW', 'Wade Warren', 'Today, 12.30 pm', 870),
    new User('CW', 'Cameron Williamson', 'Today, 12.30 pm', 1200),
  ];
}

export class User {
  constructor(
    public initials: string,
    public name: string,
    public lastSeen: string,
    public amount: number
  ) { }
}
