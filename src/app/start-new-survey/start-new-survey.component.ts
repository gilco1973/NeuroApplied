import { Component, OnInit } from '@angular/core';
import { SurveyService, SurveyStep } from '../survey.service';



@Component({
  selector: 'app-start-new-survey',
  templateUrl: './start-new-survey.component.html',
  styleUrls: ['./start-new-survey.component.scss']
})
export class StartNewSurveyComponent implements OnInit {


  constructor(private svcSurvey: SurveyService) { }

  ngOnInit() {
    this.svcSurvey.steps.push({
      stepNumber: 1, surveyStepsItems: [{
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
      }]
    });
    this.svcSurvey.steps.push({
      stepNumber: 2, surveyStepsItems: [{
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
        title: '',
        placeHolder: '',
        items: ['']
      }]
    });

    this.svcSurvey.selectedCategory = this.svcSurvey.categories[0];
  }

}
