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
              <div class="footerBanner">
                <img [src]="'assets/Follow%20Us%20on%20instagram.jpg'" alt="Follow Us on instagram">
                <div class="footerBannerContent">
                  <h2 class="followUsOnInstagram">Follow us on <a href="#">Instagram</a> </h2>
                </div>
              </div>
              <div class="footerContainer">
                <div class="footerCol1">
                  <div class="footerLogo">
                    <img [src]="'assets/Logo.png'" alt="logo" />
                    <h2>Strengthy</h2>
                  </div>
                  <p>It is a long established fact that a reader will be distracted by the readable.</p>
                  <div class="footerContactUs">
                    <div class="call">

                    </div>
                    <div class="mail">

                    </div>
                  </div>
                </div>
                <div class="footerCol2">

                </div>
                <div class="footerCol3">

                </div>
              </div>
            </div>
            <div class="copyRight">Copyright © <Span style="color: var(--blue)">FitnessFit</Span> | Designed byVictorFlow Templates - Powered by Webflow</div>
          </footer>
        </div>
    </body>
    </html>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';}
