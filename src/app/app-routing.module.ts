import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MyGroupsTeacherPageComponent } from './my-groups-teacher-page/my-groups-teacher-page.component';

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
  },
  {
    path: 'my-groups',
    component: MyGroupsTeacherPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
