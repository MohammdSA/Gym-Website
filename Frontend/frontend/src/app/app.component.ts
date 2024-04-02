import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent],
  template: `
    <html lang="en">
    <head>
      <base href="/">
      <meta charset="UTF-8">
      <title></title>
    </head>
    <body>
        <div class="container">
          <header>
            <nav class="navBar">
              <div class="navBarLogo">
                <img [src]="'assets/Logo.png'" alt="logo" />
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
        </div>
    </body>
    </html>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';}
