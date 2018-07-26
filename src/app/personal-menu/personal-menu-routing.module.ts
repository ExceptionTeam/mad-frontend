import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPasswordComponent } from '../edit-password/edit-password.component';
import { MyGroupsTeacherPageComponent } from '../my-groups-teacher-page/my-groups-teacher-page.component';


const routes: Routes = [
  {
    path: 'personal-menu',
    children: [
      {
        path: 'edit-password',
        component: EditPasswordComponent
      },
      {
        path: 'my-groups',
        component: MyGroupsTeacherPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalMenuRoutingModule {
}
