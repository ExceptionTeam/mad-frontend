import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGroupsTeacherPageComponent } from './my-groups-teacher-page/my-groups-teacher-page.component';

const routes: Routes = [
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
