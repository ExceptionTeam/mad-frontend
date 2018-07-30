import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPasswordComponent } from '../../edit-password/edit-password.component';
import { NotificationsAdminComponent } from '../../notifications-admin/notifications-admin.component';
import { ConfirmRoleComponent } from '../../confirm-role/confirm-role.component';
import { ConfirmTrainingTestComponent } from '../../confirm-training-test/confirm-training-test.component';
import { CheckAnswerPageComponent } from '../../check-answer-page/check-answer-page.component';


const routes: Routes = [
  {
    path: 'personal-menu',
    children: [
      {
        path: 'edit-password',
        component: EditPasswordComponent
      },
      {
        path: 'notifications',
        component: NotificationsAdminComponent,
        children: [
          {
            path: 'confirm-role',
            component: ConfirmRoleComponent
          },
          {
            path: 'confirm-test',
            component: ConfirmTrainingTestComponent
          },
          {
            path: 'check-answer',
            component: CheckAnswerPageComponent
          }
        ]
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
