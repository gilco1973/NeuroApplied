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
  businessQuestions: any[] = [{ subs: [{ children: ['Why sales are declining?',
    'Why custumers churn is high?',
    'Why employees churn is high?',
    'Why customers are leaving?',
    'Why do we get low rating in?',
    'How effective is my messaging?']}]}];
  selectedCategory: any;
  selectedBusinessQuestions: any[];
  selectedResearchSetups: any[];
  selectedResearch: any;
  selectedBusiness: any;
  researchSteps: any[] = [{ subs: [{ children: ['Finding unknown brand values', 'Compare brand perception to competitors'] }],
   selectedChild: 'Finding unknown brand values'}];
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


  updateCategoryObject(selectedCategoryHeader) {
    this.selectedCategory = this.categories.find((item) => {
      return selectedCategoryHeader === item.key;
    });

  }
  constructor() {
    this.selectedCategory = this.categories[0];
    this.selectedBusiness = this.businessQuestions[0];
    this.selectedResearch = this.researchSteps[0];
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
