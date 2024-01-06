import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HerosDetailsComponent } from './pages/heros-details/heros-details.component';
import { HerosComponent } from './pages/heros/heros.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HerosComponent },
  { path: 'details', component: HerosDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
