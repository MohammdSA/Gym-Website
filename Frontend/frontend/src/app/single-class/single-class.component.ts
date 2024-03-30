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
      <img src="assets/classbanner.png">
      <div class="bannerContent">
        <h1>Keep Your Body <br> Fit & Strong</h1>
        <div>
          <button id="startToday" class="btn">Start Today</button>
          <button id="aboutMe" class="btn">About Me</button>
        </div>
      </div>
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
