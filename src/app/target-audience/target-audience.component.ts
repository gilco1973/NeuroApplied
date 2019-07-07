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
  constructor() { }

  ngOnInit() {
  }
  checkBoxClicked($event, item) {
    console.log(item);
  }
}
