import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-start-new-survey',
  templateUrl: './start-new-survey.component.html',
  styleUrls: ['./start-new-survey.component.scss']
})
export class StartNewSurveyComponent implements OnInit {
  step1Items: { itemType: string; title: string; placeHolder: string; items: any[]; }[];
  step2Items: { itemType: string; title: string; placeHolder: string; items: any[]; }[];

  constructor(private svcSurvey: SurveyService) { }

  ngOnInit() {
    this.step1Items = [{
      itemType: 'input',
      title: 'Survey Name',
      placeHolder: 'The name of your new survey',
      items: ['']
    }, {
      itemType: 'country',
      title: 'Survey Location (country)',
      placeHolder: '',
      items: ['']
    }, {
      itemType: 'select',
      title: 'Region',
      placeHolder: '',
      items: ['All', 'North', 'South', 'East', 'West', 'Central']
    }];
    this.step2Items = [{
      itemType: 'select-parents',
      title: 'Category',
      placeHolder: '',
      items: this.svcSurvey.categories
    }, {
      itemType: 'select-children',
      title: 'Sub Category',
      placeHolder: '',
      items: this.svcSurvey.categories
    }, {
      itemType: 'add',
      title: 'Add a sub category',
      placeHolder: '',
      items: ['']
    }];
  }

}
