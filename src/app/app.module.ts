import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameCreatorComponent } from './game-creator/game-creator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { RequestInterceptor } from './request-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { MDBBootstrapModule, MDBModalRef } from 'angular-bootstrap-md';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { CreateGameIntroComponent } from './create-game-intro/create-game-intro.component';
import { GetCurrentUserResolver } from './get-current-user.resolver';
import { StartNewSurveyComponent } from './start-new-survey/start-new-survey.component';
import { SurveyStepComponent } from './survey-step/survey-step.component';
import { SurveyStepItemComponent } from './survey-step-item/survey-step-item.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TargetAudienceComponent } from './target-audience/target-audience.component';
import { Ng5SliderModule } from 'ng5-slider';
import { BrandComponent } from './brand/brand.component';
import { ScreenComponent } from './screen/screen.component';
import { UploadSectionComponent } from './upload-section/upload-section.component';
import { MsalModule } from '@azure/msal-angular';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchaseCompletedComponent } from './purchase-completed/purchase-completed.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('Linkedin-App-Id')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameCreatorComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    TopNavBarComponent,
    CreateGameIntroComponent,
    StartNewSurveyComponent,
    SurveyStepComponent,
    SurveyStepItemComponent,
    TargetAudienceComponent,
    BrandComponent,
    ScreenComponent,
    UploadSectionComponent,
    CheckoutComponent,
    PurchaseCompletedComponent
  ],
  imports: [
    BrowserModule,
    MsalModule.forRoot({
      clientID: 'c2b01489-73c3-43a6-bcb3-4e11dadb2901' // Microsoft App Id
  }),
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    NgMultiSelectDropDownModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    Ng5SliderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    MDBModalRef,
    GetCurrentUserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
