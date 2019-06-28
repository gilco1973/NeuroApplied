import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-new-survey',
  templateUrl: './start-new-survey.component.html',
  styleUrls: ['./start-new-survey.component.scss']
})
export class StartNewSurveyComponent implements OnInit {
  step1Items: { itemType: string; title: string; placeHolder: string; items: string[]; }[];
  constructor() { }

  ngOnInit() {
    this.step1Items = [{
      itemType: 'input',
      title: 'Survey Name',
      placeHolder: 'The name for your new survey',
      items: ['']
    }, {
      itemType: 'country',
      title: 'Survey Location (country)',
      placeHolder: '',
      items: ['']
    }];
  }

}
