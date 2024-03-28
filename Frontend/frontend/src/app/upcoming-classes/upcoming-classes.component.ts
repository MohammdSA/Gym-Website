import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UpcomingClass} from "../upcoming-class";

@Component({
  selector: 'app-upcoming-classes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="upcomingClass">
      <img [src]="upcomingClass.thumbnail" alt="Class Image" class="upcomingClassImg"/>
      <div class="upcomingClassContent">
        <h2 class="className">{{upcomingClass.name}}</h2>
        <p class="classDescription">{{upcomingClass.description}}</p>
        <a href="#" class="readMore">Read More</a>
      </div>
    </section>
  `,
  styleUrl: './upcoming-classes.component.css'
})
export class UpcomingClassesComponent {
  @Input() upcomingClass!: UpcomingClass;
}
