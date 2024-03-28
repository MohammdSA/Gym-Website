import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import {Class} from "../class";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="upcomingClass">
      <img [src]="upcomingClass.thumbnail" alt="Class Image" class="upcomingClassImg"/>
      <div class="upcomingClassContent">
        <h2 class="className">{{upcomingClass.name}}</h2>
        <p class="classDescription">{{upcomingClass.description}}</p>
        <a [routerLink]="['/classes', upcomingClass.id]">Read More</a>
      </div>
    </section>
  `,
  styleUrl: './class.component.css'
})
export class ClassComponent {
  @Input() upcomingClass!: Class;
}
