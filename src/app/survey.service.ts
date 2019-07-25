import { Injectable } from '@angular/core';

export class SurveyStep {
  stepNumber: number;
  surveyStepsItems: SurveyStepItem[];
  header?: string;
}
export class SurveyStepItem {
  itemType: string;
  title: string;
  placeHolder: string;
  items?: any[];
  selectedItems?: any[];
  addTitle?: string;
  itemTypeToAdd?: string;
  info?: string;
  isEditing: boolean;
  tooltip?: string;
}
export class Category {
  key: string;
  subs: SubItem[];
  selectedAttributes?: string[] = [];
  attributes?: string[] = [];
}
export class SubItem {
  parent: string;
  children: string[];
  selectedChild?: string;
}
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  steps: SurveyStep[] = [];
  businessQuestions: any[] = [{
    subs: [{
      children: ['Why sales are declining?',
        'Why custumers churn is high?',
        'Why employees churn is high?',
        'Why customers are leaving?',
        'Why do we get low rating in?',
        'How effective is my messaging?']
    }]
  }];
  selectedCategory: any;
  selectedBusinessQuestions: any[];
  selectedResearchSetups: any[];
  selectedResearch: any;
  selectedBusiness: any;
  researchSteps: any[] = [{
    subs: [{ children: ['Finding unknown brand values', 'Compare brand perception to competitors'] }],
    selectedChild: 'Finding unknown brand values'
  }];
  attributes: string[] = ['Fun', 'Uplifting', 'Trustworthy', 'For someone...', 'Tasty', 'Goes well with'];
  categories: Category[] = [
    {
      key: 'Automotive', subs: [{
        parent: 'Automotive',
        children: ['Auction Services', 'Dealer Services', 'Tires', 'Vehicle Manufacturers'],
        selectedChild: 'Auction Services'
      }],
      attributes: this.attributes
    },
    {
      key: 'Agencies', subs: [{
        parent: 'Agencies',
        children: ['Consulting Firms', 'Advertising Agencies', 'Communications', 'Broadcast Programming Publishers'],
        selectedChild: 'Consulting Firms'
      }],
      attributes: this.attributes
    }, {
      key: 'Consumer Goods', subs: [{
        parent: 'Consumer Goods',
        children: ['Packaged Goods', 'Durable Goods', 'Alcohol Beverages', 'Children Products', 'Pet Care'],
        selectedChild: 'Packaged Goods'
      }]
    }, {
      key: 'Financial Services', subs: [{
        parent: 'Financial Services',
        children: ['Retail Banking', 'Credit Cards', 'Insurance Products', 'Investment Services', 'Lending / Mortgages'],
        selectedChild: 'Retail Banking'
      }],
      attributes: this.attributes
    }, {
      key: 'Hospitality', subs: [{
        parent: 'Hospitality',
        children: ['Restaurant', 'Cruise Lines', 'Airlines'],
        selectedChild: 'Restaurant'
      }]
    }, {
      key: 'Industrial / Housing', subs: [{
        parent: 'Industrial / Housing',
        children: ['Industrial Tools', 'Shipping Products', 'Consumer Packaging',
          'Home Improvement', 'Products', 'Residential Construction'],
        selectedChild: 'Industrial Tools'
      }],
      attributes: this.attributes
    }, {
      key: 'Medical / Healthcare', subs: [{
        parent: 'Medical / Healthcare',
        children: ['Health Insurance', 'OTC & Pharma', 'Eye Care'],
        selectedChild: 'Health Insurance'
      }]
    }, {
      key: 'Retail', subs: [{
        parent: 'Retail',
        children: ['Home Improvement', 'Grocery', 'Merchandise', 'Warehouse Club', 'Sporting Goods', 'Specialty Foods', 'Electronics'],
        selectedChild: 'Home Improvement'
      }],
      attributes: this.attributes
    }, {
      key: 'Technology / Utilities', subs: [{
        parent: 'Technology / Utilities',
        children: ['Telecommunications', 'Cable / Sattlelite TV', 'Internet Security', 'Energy'],
        selectedChild: 'Telecommunications'
      }],
      attributes: this.attributes
    }];
  selectedRegion: any[];


  updateCategoryObject(selectedCategoryHeader) {
    this.selectedCategory = this.categories.find((item) => {
      return selectedCategoryHeader === item.key;
    });

  }
  constructor() {
    this.selectedCategory = this.categories[0];
    this.selectedBusiness = this.businessQuestions[0];
    this.selectedResearch = this.researchSteps[0];
    this.steps.push({
      stepNumber: 1, surveyStepsItems: [{
        itemType: 'select-business',
        title: 'What is your business question?',
        placeHolder: '',
        items: this.businessQuestions,
        selectedItems: this.selectedBusinessQuestions,
        isEditing: true
      }, {
        itemType: 'add',
        title: '',
        addTitle: '*Add a business question',
        placeHolder: '',
        itemTypeToAdd: 'business',
        isEditing: true,
        tooltip: `No problem, you may add any business question which isn’t include in our list.
        Just write it over here and our team will get in touch with you in 2 business days.
        Keep notice an question not apear over the above may effect the final price`
      }, {
        itemType: 'select-research',
        title: 'Research setup',
        placeHolder: '',
        items: this.researchSteps,
        selectedItems: this.selectedResearchSetups,
        isEditing: true,
        tooltip: `Multiple research setups will effect the results delivery time (an extra 10 days) and also 
        the final price`
      }, {
        itemType: 'add',
        title: '',
        addTitle: '*Add a research setup',
        placeHolder: '',
        itemTypeToAdd: 'research',
        isEditing: true
      }]
    });
    this.steps.push({
      stepNumber: 2, surveyStepsItems: [{
        itemType: 'select-parents',
        title: 'Category',
        placeHolder: '',
        items: this.categories,
        isEditing: true
      }, {
        itemType: 'select-category',
        title: 'Sub Category',
        placeHolder: '',
        items: this.categories,
        isEditing: true
      }, {
        itemType: 'add',
        title: '',
        addTitle: '*Add a sub category',
        placeHolder: '',
        itemTypeToAdd: 'category',
        isEditing: true
      }, {
        itemType: 'select-multi',
        title: 'Values',
        placeHolder: '',
        items: this.selectedCategory.attributes,
        isEditing: true
      }, {
        itemType: 'input',
        title: '*Additional Values (Add values not in list)',
        placeHolder: 'Write here',
        isEditing: true,
        tooltip: `Adding values not in value list, should be all be prenounce in adjective and will effect 
        the final price and result’s delivary time 
        (10 extra days). You may remove them any 
        time before checkout `
      }]
    });
    this.steps.push({
      stepNumber: 3, surveyStepsItems: [{
        itemType: 'country',
        title: 'Survey Location (country)',
        placeHolder: '',
        isEditing: true,
        tooltip: 'Select a country and a region'
      }, {
        itemType: 'select',
        title: 'Region',
        placeHolder: '',
        items: ['All', 'North', 'South', 'East', 'West', 'Central'],
        selectedItems: this.selectedRegion,
        isEditing: true
      }]
    });
    this.steps.push({
      stepNumber: 4,
      header: 'Define target audience',
      surveyStepsItems: [{
        itemType: 'cbGroup',
        title: '',
        placeHolder: '',
        items: ['For self distribution', 'Specify target audience'],
        isEditing: true
      }]
    });
    this.steps.push({
      stepNumber: 5,
      header: 'Upload media',
      surveyStepsItems: [{
        itemType: 'brand',
        title: '',
        placeHolder: '',
        items: [''],
        isEditing: true
      }]
    });
    this.steps.push({
      stepNumber: 6,
      header: 'Survey name',
      surveyStepsItems: [{
        itemType: 'input',
        title: '',
        placeHolder: 'The name of your survey',
        items: [''],
        isEditing: true
      }]
    });
    this.selectedCategory = this.categories[0];
  }
  addSubItem(itemToAdd: string) {
    const subItem = new SubItem();
    switch (itemToAdd) {
      case 'category':
        subItem.parent = this.selectedCategory.subs[0].parent;
        subItem.children = this.selectedCategory.subs[0].children;
        subItem.selectedChild = this.selectedCategory.subs[0].selectedChild;
        this.selectedCategory.subs.push(subItem);
        break;
      case 'research':
        subItem.children = this.selectedResearch.subs[0].children;
        subItem.selectedChild = this.selectedResearch.subs[0].selectedChildren;
        this.selectedResearch.subs.push(subItem);
        break;
      case 'business':
        subItem.children = this.selectedBusiness.subs[0].children;
        subItem.selectedChild = this.selectedBusiness.subs[0].selectedChildren;
        this.selectedBusiness.subs.push(subItem);
        break;
    }
    if (!this.selectedCategory) {
      return;
    }
  }
}
