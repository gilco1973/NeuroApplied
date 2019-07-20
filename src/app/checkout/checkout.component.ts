import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var paypal: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '0.01'
            }
          }]
        });
      },
      onApprove: (data, actions) => {
        // Capture the funds from the transaction
        return actions.order.capture().then((details: any) => {
          // Show a success message to your buyer
          this.router.navigateByUrl('/completed?name=' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container');
  }

}
