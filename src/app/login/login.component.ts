import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { User } from '../User';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { SocialLogin } from '../common/social-login.enum';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Subscription } from 'rxjs/Subscription';
declare var gapi: any;
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  hostUrl = 'http://localhost:4200';
  code: string;
  password: any;
  email: any;
  public userInfo: any = null;
  private subscription: Subscription;
  public isIframe: boolean;
  @Input() isRegister;
  constructor(private activeRoute: ActivatedRoute, private svcApi: ApiService, private router: Router,
    private broadcastService: BroadcastService, private authService: MsalService) {
    //  This is to avoid reload during acquireTokenSilent() because of hidden iframe
    this.isIframe = window !== window.parent && !window.opener;
  }

  ngOnInit() {
    // Facebook
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
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    this.activeRoute.queryParams.subscribe(params => {
      const social = <string>params['state'];
      this.code = <string>params['code'];
      if (social && social.length) {
        this.loginWithSocial(social);

      }
    });
    // Microsoft
    this.broadcastService.subscribe('msal:loginFailure', (payload) => {
      console.log('Microsoft login failure ' + JSON.stringify(payload));
    });

    this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      this.navigateToIntro('Microsoft login success' + JSON.stringify(payload));
    });
  }

  loginWithSocial(social: string) {
    if (social === 'Microsoft') {
      if (this.authService.getUser()) {
        this.navigateToIntro('Microsoft user logged In already');
        return;
      }
      this.authService.loginPopup(['user.read' , 'api://c2b01489-73c3-43a6-bcb3-4e11dadb2901/user.read']);
    } else if (social === 'Facebook') {
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
  ngOnDestroy() {
    this.broadcastService.getMSALSubject().next(1);
    if (this.subscription) {
      this.subscription.unsubscribe();
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
}

