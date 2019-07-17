import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brandPath: any;
  competingBrandPath: any;

  constructor() { }

  ngOnInit() {
  }
  setBrandPath($event, isCompetitionBrand){
    if(isCompetitionBrand){
      this.brandPath = $event;
    }
    else{
      this.competingBrandPath = $event;
    }
  }
}
