import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-step',
  templateUrl: './survey-step.component.html',
  styleUrls: ['./survey-step.component.scss']
})
export class SurveyStepComponent implements OnInit {

  @Input() stepNumber: number;
  @Input() stepItems: { itemType: string, title: string, placeHolder: string, items: any[] }[];
  constructor() { }

  ngOnInit() {
  }

}
