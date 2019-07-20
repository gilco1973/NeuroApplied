import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-target-audience',
  templateUrl: './target-audience.component.html',
  styleUrls: ['./target-audience.component.scss']
})
export class TargetAudienceComponent implements OnInit {
  boySelected = false;
  girlSelected = false;
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
  incomes: any[] = ['Up to 25,000$',
    '25,000$ - 50,000$',
    '50,000$ - 75,000$',
    '75,000$ - 100,000$',
    '100,000$ - 150,000$',
    '150,000$ and up'];
  religions: any[] = ['Christian',
    'Muslim',
    'Jewish',
    'Buddhist',
    'Hinduist',
    'Non religious'];
  ethnicities: any[] = ['White/caucasian',
    'Black',
    'Asian',
    'Latin',
    'Native American'];
  educations: any[] = ['Elementary school',
    'High school',
    'College',
    'Graduate',
    'Phd'];
  constructor() { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      itemsShowLimit: 1,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: false
    };
  }
  checkBoxClicked($event, item) {
    console.log(item);
  }
}
