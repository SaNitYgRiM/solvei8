import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './modules/auth/pages/welcome/welcome.component';
import { SignupStep1Component} from './modules/auth/pages/signup-step1/signup-step1.component';
import { SignupStep2Component } from './modules/auth/pages/signup-step2/signup-step2.component';
import {LoginComponent  } from './modules/auth/pages/login/login.component';
import { LoggedInComponent } from './modules/auth/pages/logged-in/logged-in.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup-step1', component: SignupStep1Component },
  { path: 'signup-step2', component: SignupStep2Component },
  { path: 'login', component: LoginComponent },
  {path:'logged-in',component:LoggedInComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }