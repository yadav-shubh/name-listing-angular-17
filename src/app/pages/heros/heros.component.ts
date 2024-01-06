import { Component } from '@angular/core';
import { HerosDetailsComponent } from "../heros-details/heros-details.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heros',
  standalone: true,
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.scss',
  imports: [HerosDetailsComponent, RouterOutlet, RouterLink]
})
export class HerosComponent {

}
