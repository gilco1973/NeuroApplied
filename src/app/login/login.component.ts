import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../User';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {
  hostUrl = 'http://localhost:4200';
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      const code = <string>params['code'];
      if (code && code.length) {
        this.http.post('/login/linkedin', { code: code }).toPromise().then((res: any) => {
        },
          function error(res) {
            console.log(res);
          });
      }
    });
  }
  ngAfterViewInit() {
    // this.signInWithGoogle();
  }



  signInWithGoogle() {
    gapi.load('auth2', function () {
      gapi.auth2.init();
      const googleAuth = gapi.auth2.getAuthInstance();
      googleAuth.then(() => {
        googleAuth.signIn({ scope: 'profile email' }).then(googleUser => {
          const id_token = googleUser.getAuthResponse().id_token;
          const profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
          console.log('ID Token: ' + id_token);
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

        });

      });
    });
  }
}

