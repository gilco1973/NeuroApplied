import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SurveyService, SurveyStepItem } from '../survey.service';

@Component({
  selector: 'app-survey-step-item',
  templateUrl: './survey-step-item.component.html',
  styleUrls: ['./survey-step-item.component.scss']
})
export class SurveyStepItemComponent implements OnInit, AfterViewInit {
  @Input() stepItem: SurveyStepItem;
  @Input() isSummaryMode = false;
  selection;
  selectedChild;
  parent;
  selectedCategoryHeader;
  dropdownSettings: {
    singleSelection: boolean; idField: string; textField: string; itemsShowLimit: number;
    selectAllText: string; unSelectAllText: string; allowSearchFilter: boolean;
  };
  showTargetAudience: boolean;
  isForSelfDistribution : boolean;
  constructor(private svcSurvey: SurveyService) {

  }
  addSubItem($event) {
    console.log($event);
    this.svcSurvey.addSubItem($event);
  }
  ngAfterViewInit(): void {

  }
  checkBoxClicked($event, item) {
    this.showTargetAudience = (item === 'Specify target audience');
  }

  ngOnInit() {
    $(document).ready(function () {
      const elem: any = $("#country");
      elem.countrySelect();
    });
    if (this.stepItem.items && this.stepItem.items.length && !this.selection) {
      this.selection = this.stepItem.items[0];
    }
    if (this.svcSurvey.selectedCategory) {
      this.selectedCategoryHeader = this.svcSurvey.selectedCategory.key;
    }
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      itemsShowLimit: 1,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: false
    };
    //this.stepItem.isEditing = false;
  }
  updateChildren() {
    if (this.selectedCategoryHeader) {
      console.log('selected item:' + this.selectedCategoryHeader);
      this.svcSurvey.updateCategoryObject(this.selectedCategoryHeader);
    }


  }
  updateChildSelection(selectedChild) {
    console.log('selected child:' + selectedChild);
    //this.svcSurvey.selectedSubCategory = selectedChild;
  }
}
