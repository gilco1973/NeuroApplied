import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-target-audience',
  templateUrl: './target-audience.component.html',
  styleUrls: ['./target-audience.component.scss']
})
export class TargetAudienceComponent implements OnInit {

  value: number = 25;
  highValue: number = 65;
  options: Options = {
    floor: 13,
    ceil: 75,
    step: 1,
    showTicks: false,
    translate: (value: number): string => {
      return value + 'yrs';
    }
  };
  dropdownSettings: {
    singleSelection: boolean; idField: string; textField: string; itemsShowLimit: number;
    selectAllText: string; unSelectAllText: string; allowSearchFilter: boolean;
  };
  selectedEthnicities: any[] = [];
  selectedEducations: any[] = [];
  selectedReligions: any[] = [];
  selectedIncomes: any[] = [];
  incomes: any[] = [];
  religions: any[] = [];
  ethnicities: any[] = [];
  educations: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  checkBoxClicked($event, item) {
    console.log(item);
  }
}
