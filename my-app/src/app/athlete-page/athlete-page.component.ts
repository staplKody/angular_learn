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
  searchNames: string[] = ['TREVOR CLAUNCH'
    ,'AUSIN ELZY'
    , 'DUSTIN HYATT'
    , 'JACKSON LOTHENORE'
    , 'WILL SMITH'
    , 'WARDELL FERGUSON'
    , 'CHETT BURGE'
    , 'DILLON THOMPSON'
    , 'ADAM GREGORY'
    , 'BRIAN CALHOUN'
    , 'KODY BYRD'
    , 'LATHE WARD'
    , 'SEAN HANCOCK'
    , 'JEREMY THORTON'
    //, 'JOSH DAVIS' NO ENTRIES
    , 'EVAN BEDWELL'
    , 'BURT WILKERSON'
    , 'RANCE CLAYTON'
    , 'BRANDON SMITH'
    , 'MASON WILLIAMS'
    , 'SEAN KEEN'
    , 'JUSTIN WHITE'
    , 'DAKOTA THOMPSON'
    , 'CHASE PORCH'
    , 'BRAD MANN'
    , 'WAYNE WITHERS'
    , 'BJ FOKAKIS'
    , 'BRANDON MANN'
    , 'TRENT DAVIS'
    , 'STUART HYATT'
    , 'JOSH JARVIS'
    , 'HUNTER MCNEELY'
    , 'JOASH DENNIS'
    , 'STEVEN CHAMBERS'
  ];
  filteredWeightClasses: WeightClass[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((jsonData) => {
      this.weightClasses = this.dataService.processData(jsonData);
      this.filterWeightClasses();
    });
  }

  filterWeightClasses() {
    this.filteredWeightClasses = this.weightClasses.map((weightClass) => ({
      ...weightClass,
      pullers: weightClass.pullers.filter((puller) => {
        const fullName = `${puller.firstName} ${puller.lastName}`;
        return this.searchNames.includes(fullName.toUpperCase());
      })
    }));
  }
}

