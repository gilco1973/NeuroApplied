import { Component, OnInit } from '@angular/core';
import { SurveyService, SurveyStep } from '../survey.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-start-new-survey',
  templateUrl: './start-new-survey.component.html',
  styleUrls: ['./start-new-survey.component.scss']
})
export class StartNewSurveyComponent implements OnInit {
  selectedRegion: any[];


  constructor(private svcSurvey: SurveyService, private router: Router) { }

  ngOnInit() {
  }
  createSurvey() {
    this.router.navigateByUrl('/summary');
  }
}
