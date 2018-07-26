import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from '../sign-in-page/sign-in-page.component';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'sign-in',
    component: SignInPageComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RegistrationAuthorizationRoutingModule {
}
