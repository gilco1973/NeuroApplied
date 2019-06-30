import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-step-item',
  templateUrl: './survey-step-item.component.html',
  styleUrls: ['./survey-step-item.component.scss']
})
export class SurveyStepItemComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() itemType: string;
  @Input() items: any[] = [];
  @Input() placeHolder: string;
  selection;
  selectedChild;
  parent;
  selectedCategoryHeader;
  constructor(private svcSurvey: SurveyService) {

  }
  addSubCategory() {

  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    $(document).ready(function () {
      const elem: any = $("#country");
      elem.countrySelect();
    });
    if (this.items && this.items.length && !this.selection) {
      this.selection = this.items[0];
    }
  }
  updateChildren() {
    if(this.selectedCategoryHeader){
    console.log('selected item:' + this.selectedCategoryHeader);
    this.svcSurvey.updateCategoryObject(this.selectedCategoryHeader);
    }
    

  }
  updateChildSelection(selectedChild) {
    console.log('selected child:' + selectedChild);
    this.svcSurvey.selectedSubCategory = selectedChild;
  }
}
