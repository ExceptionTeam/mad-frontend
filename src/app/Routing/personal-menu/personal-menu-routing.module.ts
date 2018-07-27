import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPasswordComponent } from '../../edit-password/edit-password.component';
import { NotificationsAdminComponent } from '../../notifications-admin/notifications-admin.component';
import { ConfirmRoleComponent } from '../../confirm-role/confirm-role.component';


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
