import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmRoleComponent } from '../confirm-role/confirm-role.component';
import { NotificationsAdminComponent } from './notifications-admin.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NotificationsAdminRoutingModule {
}
