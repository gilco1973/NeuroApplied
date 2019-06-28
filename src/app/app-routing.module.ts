import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GameCreatorComponent } from './game-creator/game-creator.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateGameIntroComponent } from './create-game-intro/create-game-intro.component';
import { GetCurrentUserResolver } from './get-current-user.resolver';
import { StartNewSurveyComponent } from './start-new-survey/start-new-survey.component';



const routes: Routes = [
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin/game/create',
    component: GameCreatorComponent,
  },
  {
    path: 'intro',
    component: CreateGameIntroComponent,
  //  resolve: { currentUser: GetCurrentUserResolver}
  },
  {
    path: 'new-survey',
    component: StartNewSurveyComponent,
  //  resolve: { currentUser: GetCurrentUserResolver}
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
})

export class AppRoutingModule { }
