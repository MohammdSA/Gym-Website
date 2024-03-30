import { Component, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ClassComponent} from "../class/class.component";
import {RouterOutlet} from "@angular/router";
import {Class} from "../class";
import {ClassService} from "../class.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ClassComponent, RouterOutlet],
  template: `
    <section class="banner">
      <img src="assets/banner.png">
      <div class="bannerContent">
        <h1>Keep Your Body <br> Fit & Strong</h1>
        <div>
          <button id="startToday" class="btn">Start Today</button>
          <button id="aboutMe" class="btn">About Me</button>
        </div>
      </div>
    </section>

    <section class="upcomingClasses">
      <object id="classicPattern" data="assets/Classic Pattern.svg"></object>
      <div class="upcomingClassesHeader">
        <div class="upcomingClassesHeaderText">
          <h3>OUR FITNESS TRAINING</h3>
          <h2>Upcoming Classes</h2>
        </div>
        <button class="btn" id="moreClass">More Class</button>
      </div>
      <div class="upcomingClassList">
        <app-class *ngFor="let upcomingClass of upcomingClassList" [upcomingClass]="upcomingClass"></app-class>
      </div>
    </section>

    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  upcomingClassList: Class[] = [];
  upcomingClassService: ClassService = inject(ClassService);

  constructor() {
    this.upcomingClassList = this.upcomingClassService.getAllClasses();

  }
}
