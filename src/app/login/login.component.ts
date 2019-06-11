import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../User';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { SocialLogin } from '../common/social-login.enum';
declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {
  hostUrl = 'http://localhost:4200';
  code: string;
  password: any;
  email: any;
  constructor(private activeRoute: ActivatedRoute, private svcApi: ApiService, private http: HttpClient) {

  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      const social = <string>params['state'];
      this.code = <string>params['code'];
      if (social && social.length) {
        this.loginWithSocial(social);

      }
    });
  }
  loginWithSocial(social: string) {
    this.svcApi.loginWithSocial(social, this.code).then((res: any) => {
      this.http.get(res.url).toPromise().then((result: any) => {
        console.log(result);
      });
    },
      function error(res) {
        console.log(res);
      });

  }
  ngAfterViewInit() {
  }
  loginWithPassword(){
    this.svcApi.loginWithPassword(this.email, this.password).then((res: any) => {
      this.http.get(res.url).toPromise().then((result: any) => {
        console.log(result);
      });
    },
      function error(res) {
        console.log(res);
      });

  }


  // signInWithGoogle() {
  //   gapi.load('auth2', () => {
  //     gapi.auth2.init();
  //     const googleAuth = gapi.auth2.getAuthInstance();
  //     googleAuth.then(() => {
  //       googleAuth.signIn({ scope: 'profile email' }).then(googleUser => {
  //         this.code = googleUser.getAuthResponse().id_token;
  //         this.loginWithSocial('google');
  //         /* const profile = googleUser.getBasicProfile();
  //         console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //         console.log('ID Token: ' + id_token);
  //         console.log('Name: ' + profile.getName());
  //         console.log('Image URL: ' + profile.getImageUrl());
  //         console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present. */

  //       });

  //     });
  //   });
  // }
}

