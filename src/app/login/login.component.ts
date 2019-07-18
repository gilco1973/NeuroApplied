import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { User } from '../User';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { SocialLogin } from '../common/social-login.enum';
declare var gapi: any;
declare var FB: any;

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
  @Input() isRegister;
  constructor(private activeRoute: ActivatedRoute, private svcApi: ApiService, private router: Router) {

  }

  ngOnInit() {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '373670939957437',
        cookie: true,
        xfbml: true,
        version: 'v3.3'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    this.activeRoute.queryParams.subscribe(params => {
      const social = <string>params['state'];
      this.code = <string>params['code'];
      if (social && social.length) {
        this.loginWithSocial(social);

      }
    });
  }
  loginWithSocial(social: string) {
    if (social === 'Facebook') {
      FB.login((res: any) => {
        if (res.authResponse) {
          this.navigateToIntro(res);
        } else {
          console.log('Facebook login failed', res);
        }
      });
    } else {
      this.svcApi.loginWithSocial(social, this.code).then((res: any) => {
        this.navigateToIntro(res);
      });
    }
  }
  navigateToIntro(res: any) {
    console.log(res);
    this.router.navigateByUrl('/intro');
  }
  ngAfterViewInit() {
  }
  loginWithPassword() {
    this.svcApi.loginWithPassword(this.email, this.password).then((res: any) => {
      this.navigateToIntro(res);
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

