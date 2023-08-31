export interface PullerModel {
    id: number;
    firstName: string;
    lastName: string;
    elo: number;
    dayOfMatch: string;
  }
  
export interface WeightClass{
    arm: string;
    weight: string;
    pullers: PullerModel[];
  }