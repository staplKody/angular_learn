import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeightClass,PullerModel } from './interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getJsonData(): Observable<WeightClass[]> {
    return this.http.get<any>('https://aersarm.com/api/Elosnapshot/GetCombinedResults/?weightClassType=WAF');
  }


  processData(jsonData: any): WeightClass[] {
    const bracketPullerArray = jsonData.bracketPullers; // Use the correct property name
    
    const weightClasses: WeightClass[] = [];
  
    for (const item of bracketPullerArray) {
      if(item.division == 'OPEN'){
        const weightClass: WeightClass = {
          arm: item.arm,
          weight: item.weight,
          pullers: item.pullerModels
        };
        weightClasses.push(weightClass);
      }
    }
    console.log(weightClasses);
    return weightClasses; 
  }
  
  
}
