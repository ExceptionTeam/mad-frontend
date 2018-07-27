import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsAdminComponent } from './notifications-admin.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NotificationsAdminRoutingModule } from './notifications-admin-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ConfirmRoleComponent } from '../confirm-role/confirm-role.component';
import { MatIconModule } from '@angular/material';
import { MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    NotificationsAdminRoutingModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [NotificationsAdminComponent,
    ConfirmRoleComponent],
  exports: [NotificationsAdminComponent,
    ConfirmRoleComponent],
  providers: []
})
export class NotificationsAdminModule {
}
