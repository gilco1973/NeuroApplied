import { Component, OnInit } from '@angular/core';
import { SurveyService, SurveyStep } from '../survey.service';



@Component({
  selector: 'app-start-new-survey',
  templateUrl: './start-new-survey.component.html',
  styleUrls: ['./start-new-survey.component.scss']
})
export class StartNewSurveyComponent implements OnInit {
  selectedRegion: any[];


  constructor(private svcSurvey: SurveyService) { }

  ngOnInit() {
    this.svcSurvey.steps.push({
      stepNumber: 1, surveyStepsItems: [/* {
        itemType: 'input',
        title: 'Survey Name',
        placeHolder: 'The name of your new survey',
        items: ['']
      },  */{
          itemType: 'select-business',
          title: 'What is your business question?',
          placeHolder: '',
          items: this.svcSurvey.businessQuestions,
          selectedItems: this.svcSurvey.selectedBusinessQuestions
        }, {
          itemType: 'add',
          title: '',
          addTitle: '*Add a business question',
          placeHolder: '',
          itemTypeToAdd: 'business'
        }, {
          itemType: 'select-research',
          title: 'Research setup',
          placeHolder: '',
          items: this.svcSurvey.researchSteps,
          selectedItems: this.svcSurvey.selectedResearchSetups
        }, {
          itemType: 'add',
          title: '',
          addTitle: '*Add a research setup',
          placeHolder: '',
          itemTypeToAdd: 'research'
        }]
    });
    this.svcSurvey.steps.push({
      stepNumber: 2, surveyStepsItems: [{
        itemType: 'select-parents',
        title: 'Category',
        placeHolder: '',
        items: this.svcSurvey.categories
      }, {
        itemType: 'select-category',
        title: 'Sub Category',
        placeHolder: '',
        items: this.svcSurvey.categories
      }, {
        itemType: 'add',
        title: '',
        addTitle: '*Add a sub category',
        placeHolder: '',
        itemTypeToAdd: 'category'
      }, {
        itemType: 'select-multi',
        title: 'Attributes',
        placeHolder: '',
        items: this.svcSurvey.selectedCategory.attributes
      }, {
        itemType: 'input',
        title: '*Add attributes (Add values not in list)',
        placeHolder: 'Write here',
      }]
    });
    this.svcSurvey.steps.push({
      stepNumber: 3, surveyStepsItems: [{
        itemType: 'input',
        title: 'Survey Name',
        placeHolder: 'The name of your new survey',
        items: ['']
      }, {
        itemType: 'country',
        title: 'Survey Location (country)',
        placeHolder: ''
      }, {
        itemType: 'select',
        title: 'Region',
        placeHolder: '',
        items: ['All', 'North', 'South', 'East', 'West', 'Central'],
        selectedItems: this.selectedRegion
      }]
    });
    this.svcSurvey.steps.push({
      stepNumber: 4,
      header: 'Define target audience',
      surveyStepsItems: [{
        itemType: 'cbGroup',
        title: '',
        placeHolder: '',
        items: ['For self distribution', 'Specify target audience']
      }]
    });
    this.svcSurvey.selectedCategory = this.svcSurvey.categories[0];
  }

}
