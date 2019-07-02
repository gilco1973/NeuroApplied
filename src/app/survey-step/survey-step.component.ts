import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { SurveyService, SurveyStepItem, SurveyStep } from '../survey.service';

@Component({
  selector: 'app-survey-step',
  templateUrl: './survey-step.component.html',
  styleUrls: ['./survey-step.component.scss']
})
export class SurveyStepComponent implements OnInit {

  @Input() step: SurveyStep;
  constructor(private svcSurvey: SurveyService) { }

  ngOnInit() {

  }
}
