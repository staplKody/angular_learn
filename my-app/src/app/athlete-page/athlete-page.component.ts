import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-athlete-page',
  templateUrl: './athlete-page.component.html',
  styleUrls: ['./athlete-page.component.css']
})
export class AthletePageComponent {
  //aersURL: string = 'https://aersarm.com/api/Elosnapshot/GetCombinedResults/?weightClassType=WAF'; // Replace with your URL
  athleteArray: any[] = [];

  
}
