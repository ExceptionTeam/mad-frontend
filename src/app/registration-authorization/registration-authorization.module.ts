import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegistrationAuthorizationRoutingModule } from './registration-authorization-routing.module';
import { RegistrationPageModule } from '../registration-page/registration-page.module';
import { SignInModule } from '../sign-in-page/sign-in.module';
import { ForgotPasswordModule } from '../forgot-password/forgot-password.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RegistrationAuthorizationRoutingModule,
    RegistrationPageModule,
    SignInModule,
    ForgotPasswordModule
  ],
  providers: [],
  bootstrap: []
})
export class RegistrationAuthorizationModule {
}
