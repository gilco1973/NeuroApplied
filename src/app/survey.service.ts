import { Injectable } from '@angular/core';

export class SurveyStep {
  stepNumber: number;
  surveyStepsItems: SurveyStepItem[];
}
export class SurveyStepItem {
  itemType: string;
  title: string;
  placeHolder: string;
  items: any[];
}
export class Category {
  key: string;
  subs: SubCategory[];

}
export class SubCategory {
  parent: string;
  children: string[];
  selectedChild?: string;
}
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  steps: SurveyStep[] = [];
  selectedCategory: any;
  categories: Category[] = [
    {
      key: 'Automotive', subs: [{
        parent: 'Automotive',
        children: ['Auction Services', 'Dealer Services', 'Tires', 'Vehicle Manufacturers'],
        selectedChild: 'Auction Services'
      }]
    },
    {
      key: 'Agencies', subs: [{
        parent: 'Agencies',
        children: ['Consulting Firms', 'Advertising Agencies', 'Communications', 'Broadcast Programming Publishers'],
        selectedChild: 'Consulting Firms'
      }]
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
      }]
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
      }]
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
      }]
    }, {
      key: 'Technology / Utilities', subs: [{
        parent: 'Technology / Utilities',
        children: ['Telecommunications', 'Cable / Sattlelite TV', 'Internet Security', 'Energy'],
        selectedChild: 'Telecommunications'
      }]
    }];
  updateCategoryObject(selectedCategoryHeader) {
    this.selectedCategory = this.categories.find((item) => {
      return selectedCategoryHeader === item.key;
    });

  }
  constructor() {
    this.selectedCategory = this.categories[0];
  }
  addSubCategory() {
    if (!this.selectedCategory) {
      return;
    }
    const newSub = new SubCategory();
    newSub.parent = this.selectedCategory.subs[0].parent;
    newSub.children = this.selectedCategory.subs[0].children;
    newSub.selectedChild = this.selectedCategory.subs[0].selectedChild;
    this.selectedCategory.subs.push(newSub);
  }
}
