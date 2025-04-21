import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path: 'profile', component: ProfileComponent }
];
