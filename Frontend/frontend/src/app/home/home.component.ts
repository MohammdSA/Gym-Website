import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ClassComponent} from "../class/class.component";
import {UpcomingClass} from "../upcoming-class";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ClassComponent, ClassComponent],
  template: `
    <section class="homePageBanner">
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
    <div class="test"></div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  upcomingClassList: UpcomingClass[] = [
    {
      "id": 1,
      "name": "Yoga as Therapy",
      "description": "Objectively innovate empowered manufactured products",
      "thumbnail": "assets/Image.png",
    },
    {"id": 3,
      "name": "Pilates Training",
      "description": "containing Lorem Ipsum passagesand more recently with",
      "thumbnail": "assets/Pilates Training.png",
    },
    {"id": 4,
      "name": "Aerobic Training",
      "description": "containing Lorem Ipsum passagesand more recently with",
      "thumbnail": "assets/Aerobic.png",
    }
  ];
}
