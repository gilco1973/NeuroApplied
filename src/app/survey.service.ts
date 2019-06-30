import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  selectedCategory: any;
  selectedSubCategory: any;
  categories: any[] = [
    {
      key: 'Automotive',
      children: ['Auction Services', 'Dealer Services', 'Tires', 'Vehicle Manufacturers']
    },
    {
      key: 'Agencies',
      children: ['Consulting Firms', 'Advertising Agencies', 'Communications', 'Broadcast Programming Publishers']
    }, {
      key: 'Consumer Goods',
      children: ['Packaged Goods', 'Durable Goods', 'Alcohol Beverages', 'Children Products', 'Pet Care']
    }, {
      key: 'Financial Services',
      children: ['Retail Banking', 'Credit Cards', 'Insurance Products', 'Investment Services', 'Lending / Mortgages']
    }, {
      key: 'Hospitality',
      children: ['Restaurant', 'Cruise Lines', 'Airlines']
    }, {
      key: 'Industrial / Housing',
      children: ['Industrial Tools', 'Shipping Products', 'Consumer Packaging', 'Home Improvement', 'Products', 'Residential Construction']
    }, {
      key: 'Medical / Healthcare',
      children: ['Health Insurance', 'OTC & Pharma', 'Eye Care']
    }, {
      key: 'Retail',
      children: ['Home Improvement', 'Grocery', 'Merchandise', 'Warehouse Club', 'Sporting Goods', 'Specialty Foods', 'Electronics']
    }, {
      key: 'Technology / Utilities',
      children: ['Telecommunications', 'Cable / Sattlelite TV', 'Internet Security', 'Energy']
    }];
  updateCategoryObject(selectedCategoryHeader) {
    this.selectedCategory = this.categories.find((item) => {
      return selectedCategoryHeader === item.key;
    });
  }
  updateSubCategory(subCategory){
    this.selectedSubCategory = subCategory;
  }
  constructor() { 
    this.selectedCategory = this.categories[0];
  }
}
