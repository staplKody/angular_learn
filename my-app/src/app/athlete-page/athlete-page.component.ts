import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { WeightClass,PullerModel } from '../interfaces/interfaces';



@Component({
  selector: 'app-athlete-page',
  templateUrl: './athlete-page.component.html',
  styleUrls: ['./athlete-page.component.css']
})
export class AthletePageComponent implements OnInit {
 weightClasses: WeightClass[] = [];
 searchNames: string[] = ['KODY BYRD', 'DUSTIN HYATT', 'HUNTER WELCH'];
 filteredWeightClasses: WeightClass[] = [];

 constructor(private dataService: DataService) {}

 ngOnInit(): void {
    this.dataService.getJsonData().subscribe((jsonData) => {
      this.weightClasses = this.dataService.processData(jsonData);
    })
 }
}
