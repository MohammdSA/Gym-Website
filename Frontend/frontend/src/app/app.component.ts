import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {bootstrapInstagram} from "@ng-icons/bootstrap-icons";
import {bootstrapFacebook} from "@ng-icons/bootstrap-icons";
import {bootstrapTwitterX} from "@ng-icons/bootstrap-icons";
import {bootstrapArrowUpCircle} from "@ng-icons/bootstrap-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent, NgIconComponent],
  viewProviders: [provideIcons({ bootstrapInstagram, bootstrapFacebook, bootstrapTwitterX, bootstrapArrowUpCircle })],
  template: `
      <html lang="en" xmlns="http://www.w3.org/1999/html">
    <head>
      <base href="/">
      <meta charset="UTF-8">
      <title></title>
    </head>
    <body>
        <div class="container" id="container">
          <header>
            <nav class="navBar">
              <div class="navBarLogo">
                <img [src]="'assets/Logo.png'" alt="logo" />
                <h2>Strengthy</h2>
              </div>
              <div class="navBarMenu">
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#Classes">Classes</a></li>
                  <li><a href="#Trainers">Trainers</a></li>
                  <li><a href="#News">News</a></li>
                  <li><a href="#Contact">Contact</a></li>
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
                  <h2 class="followUsOnInstagram">Follow us on <a href="https://www.instagram.com" target="_blank">Instagram</a> </h2>
                </div>
              </div>
              <div class="footerContainer">
                <div class="footerCol1">
                  <div class="footerLogoContainer">
                    <div class="footerLogo">
                      <img [src]="'assets/Logo.png'" alt="logo" />
                      <h2 class="footerHeader">Strengthy</h2>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable.</p>
                  </div>

                  <div class="footerContactUs">
                    <div class="call">
                      <h2>Call:</h2>
                      <p>01234 987654</p>
                      <p>098765 34621</p>
                    </div>
                    <div class="mail">
                      <h2>Mail:</h2>
                      <p>contact&#64;fitnessfit.com</p>
                    </div>
                  </div>
                </div>
                <div class="footerCol2">
                  <h2 class="footerHeader">Utility Pages</h2>
                  <ul>
                    <li><a href="#Style Guide">Style Guide</a></li>
                    <li><a href="#Changelog">Changelog</a></li>
                    <li><a href="#404 Page">404 Page</a></li>
                    <li><a href="#Password Protected">Password Protected</a></li>
                    <li><a href="#Licenses">Licenses</a></li>
                    <li><a href="#Contact">Contact</a></li>
                  </ul>
                </div>
                <div class="footerCol3">
                  <h2 class="footerHeader">Newsletter</h2>
                  <input type="email" placeholder="enter your email">
                  <button class="subscribeBtn">Subscribe</button>
                  <div class="socialButtons">
                    <a href="https://www.instagram.com" class="socialBtn" target="_blank"><ng-icon name="bootstrapInstagram" id="footerInstagramBtn"></ng-icon></a>
                    <a class="socialBtn" href="https://www.facebook.com" target="_blank"><ng-icon name="bootstrapFacebook" id="footerFacebookBtn"></ng-icon></a>
                    <a class="socialBtn" href="https://twitter.com/?lang=en" target="_blank"><ng-icon name="bootstrapTwitterX" id="footerXBtn"></ng-icon></a>
                  </div>
                  <div class="footerHr">
                    <hr>
                    <ng-icon name="bootstrapArrowUpCircle" id="footerArrowUp"></ng-icon>
                  </div>
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
  title = 'frontend';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const footerArrowUp: HTMLElement | null = document.getElementById('footerArrowUp');

    if(footerArrowUp){
      footerArrowUp.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
  }

}
