import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomePageComponent],
  template: `
    <app-home-page></app-home-page>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';}
