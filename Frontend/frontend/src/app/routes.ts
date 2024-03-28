import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SingleClassComponent} from "./single-class/single-class.component";


const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'classes/:id',
    component: SingleClassComponent,
    title: 'Class'
  }
];

export default routeConfig;
