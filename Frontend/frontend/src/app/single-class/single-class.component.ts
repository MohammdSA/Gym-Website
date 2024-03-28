import { Component, inject } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-class',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      single-class-page works! {{classId}}
    </p>
  `,
  styleUrl: './single-class.component.css'
})
export class SingleClassComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  classId = 0;

  constructor() {
    console.log(this.route)
    this.classId = Number(this.route.snapshot.params['id']);
  }
}
