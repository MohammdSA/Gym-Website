import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SingleClassComponent} from "./single-class/single-class.component";
import {ClassService} from "./class.service";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'classes/:id',
    component: SingleClassComponent,
  }
];
