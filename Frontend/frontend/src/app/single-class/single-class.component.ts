import { Component, inject } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ClassService} from "../class.service";
import {Class} from "../class";

@Component({
  selector: 'app-single-class',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="banner">
      <img src="assets/classSingleBanner.jpg">
      <h1 class="bannerTitle">{{singleClass?.name}}</h1>
    </section>

    <section class="classDetailsContainer">
      <img [src]="singleClass?.thumbnail">
      <div class="classDetails">
        <h2>Class Details</h2>
        <p class="classDescription">{{singleClass?.description}}</p>
        <p class="classDuration">Duration: <span>{{singleClass?.duration}}</span></p>
        <p class="classDuration">Intensity: <span>{{singleClass?.intensity}}</span></p>
        <p class="classDuration">Fitness Level: <span>{{singleClass?.level}}</span></p>
        <p class="classDuration">Schedule: <span>{{singleClass?.schedule?.days}} </span></p>
        <button>Book a Class</button>
      </div>
    </section>

    <section class="blogSection">

    </section>
  `,
  styleUrl: './single-class.component.css'
})
export class SingleClassComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  classService = inject(ClassService);
  singleClass: Class | undefined;

  constructor() {
    const classId = Number(this.route.snapshot.params['id']);
    this.singleClass = this.classService.getClassById(classId);
  }
}
