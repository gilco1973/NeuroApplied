import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SurveyService, SurveyStepItem } from '../survey.service';

@Component({
  selector: 'app-survey-step-item',
  templateUrl: './survey-step-item.component.html',
  styleUrls: ['./survey-step-item.component.scss']
})
export class SurveyStepItemComponent implements OnInit, AfterViewInit {
  @Input() stepItem: SurveyStepItem;
  selection;
  selectedChild;
  parent;
  selectedCategoryHeader;
  constructor(private svcSurvey: SurveyService) {

  }
  addSubCategory() {
    this.svcSurvey.addSubCategory();
  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    $(document).ready(function () {
      const elem: any = $("#country");
      elem.countrySelect();
    });
    if (this.stepItem.items && this.stepItem.items.length && !this.selection) {
      this.selection = this.stepItem.items[0];
    }
    if(this.svcSurvey.selectedCategory){
      this.selectedCategoryHeader = this.svcSurvey.selectedCategory.key;
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
    //this.svcSurvey.selectedSubCategory = selectedChild;
  }
}
