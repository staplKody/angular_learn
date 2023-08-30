import { Component } from '@angular/core';
import { Athlete } from '../athlete-card/athlete.model';
@Component({
  selector: 'app-athlete-page',
  templateUrl: './athlete-page.component.html',
  styleUrls: ['./athlete-page.component.css']
})
export class AthletePageComponent {
  athleteArray: Athlete[] = [
    {
      id:3065429
      ,firstName:"JOHN"
      ,lastName:"BRZENK"
      ,elo:1890.835065
      ,dayOfMatch:"2022-07-09T00:00:00"
    }
  ]
}
