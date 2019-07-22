import { Component, OnInit } from '@angular/core';
import { SurveyService, SurveyStep } from '../survey.service';



@Component({
  selector: 'app-start-new-survey',
  templateUrl: './start-new-survey.component.html',
  styleUrls: ['./start-new-survey.component.scss']
})
export class StartNewSurveyComponent implements OnInit {
  selectedRegion: any[];


  constructor(public svcSurvey: SurveyService) { }

  ngOnInit() {
  }
  createSurvey() {

  }
}
