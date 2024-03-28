import { Component } from '@angular/core';
import {UpcomingClassesComponent} from "../upcoming-classes/upcoming-classes.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UpcomingClassesComponent],
  template: `
    <header>
      <nav class="navBar">
        <div class="navBarLogo">
          <img src="assets/Logo.png" alt="logo" />
          <h2>Strengthy</h2>
        </div>
        <div class="navBarMenu">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Trainers</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button>Book Class</button>
        </div>
      </nav>
    </header>

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
      <div class="upcomingClassesHeader">
        <div class="upcomingClassesHeaderText">
          <h3>OUR FITNESS TRAINING</h3>
          <h2>Upcoming Classes</h2>
        </div>
        <button class="btn" id="moreClass">More Class</button>
      </div>
      <app-upcoming-classes></app-upcoming-classes>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <div class="test"></div>

    <footer>
      <div>
        <div>
          <img src="#" alt="footer-img">
          <h2>Follow us on Instagram</h2>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="copyRight">Copyright © FitnessFit | Designed byVictorFlow Templates - Powered by Webflow</div>
    </footer>
  `,
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
