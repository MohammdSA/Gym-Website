import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomePageComponent],
  template: `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title></title>
    </head>
    <body>
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

      <router-outlet></router-outlet>

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
    </body>
    </html>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';}
