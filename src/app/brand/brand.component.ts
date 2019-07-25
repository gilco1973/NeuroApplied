import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brandPath: any;
  competingBrandPath: any;
  selectedColor;
  selectedCompetitionColor: any;
  constructor() { }

  ngOnInit() {
  }
  setBrandPath($event, isCompetitionBrand) {
    if (isCompetitionBrand) {
      this.brandPath = $event;
    }
    else {
      this.competingBrandPath = $event;
    }
  }
  setBrandColor($event) {
    this.selectedColor = $event;
    console.log('my color:' + this.selectedColor);
  }
  setCompetitionBrandColor($event) {
    this.selectedCompetitionColor = $event;
    console.log('competition color:' + this.selectedCompetitionColor);
  }
}
