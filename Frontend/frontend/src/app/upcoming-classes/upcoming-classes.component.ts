import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-classes',
  standalone: true,
  imports: [],
  template: `
    <p>
      upcoming-classes works!
    </p>
  `,
  styleUrl: './upcoming-classes.component.css'
})
export class UpcomingClassesComponent {
  url='http://127.0.0.1:8000'

  constructor() {

  }
}
