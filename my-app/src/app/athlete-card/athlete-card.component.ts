import { Component, Input } from '@angular/core';
import { Athlete } from './athlete.model';

@Component({
  selector: 'app-athlete-card',
  templateUrl: './athlete-card.component.html',
  styleUrls: ['./athlete-card.component.css']
})
export class AthleteCardComponent {
  @Input() athleteArray: Athlete[] = [];
}
