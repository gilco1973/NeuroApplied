import { Component, OnInit } from '@angular/core';
import { SurveyService, SurveyStep } from '../survey.service';

@Component({
  selector: 'app-survey-summary',
  templateUrl: './survey-summary.component.html',
  styleUrls: ['./survey-summary.component.scss']
})
export class SurveySummaryComponent implements OnInit {
  steps: SurveyStep[];

  constructor(private svcSurvey: SurveyService) { }

  ngOnInit() {
    this.steps = this.svcSurvey.steps;
    this.steps.forEach(step => {
      step.surveyStepsItems.forEach(stepItem =>{
        stepItem.isEditing = false;
      });
      
    });
  }

}
