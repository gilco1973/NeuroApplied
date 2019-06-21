import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // isRegister: boolean;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activeRoute.params.subscribe(params => {
    //   this.isRegister = <string>params['register'] != null;
    // });
  }

}
