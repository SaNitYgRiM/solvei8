import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule here
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './modules/auth/pages/welcome/welcome.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { SignupStep1Component } from './modules/auth/pages/signup-step1/signup-step1.component';
import { SignupStep2Component } from './modules/auth/pages/signup-step2/signup-step2.component';
import { AuthService } from './services/auth.service';
import { authReducer } from './modules/auth/store/auth.reducer';
import { AuthEffects } from './modules/auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupStep1Component,
    SignupStep2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Ensure FormsModule is added here
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }