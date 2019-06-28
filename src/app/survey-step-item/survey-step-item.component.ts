import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-step-item',
  templateUrl: './survey-step-item.component.html',
  styleUrls: ['./survey-step-item.component.scss']
})
export class SurveyStepItemComponent implements OnInit {

  @Input() title: string;
  @Input() itemType: string;
  @Input() items: any[] = [];
  @Input() placeHolder: string;
  selection;
  constructor() {

  }

  ngOnInit() {
    $(document).ready(function () {
     const elem: any =  $("#country");
     elem.countrySelect();
    });
  }

}
