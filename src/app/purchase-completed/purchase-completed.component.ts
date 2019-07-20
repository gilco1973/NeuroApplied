import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-completed',
  templateUrl: './purchase-completed.component.html',
  styleUrls: ['./purchase-completed.component.scss']
})
export class PurchaseCompletedComponent implements OnInit {
  payerName: string;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.payerName = <string>params['name'];
    });
  }

}
