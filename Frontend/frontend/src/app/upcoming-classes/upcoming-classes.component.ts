import { Component, Input } from '@angular/core';
import {UpcomingClass} from "../upcoming-class";

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
  @Input() upcomingClass!: UpcomingClass;
}
