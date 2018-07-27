import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsAdminComponent } from './notifications-admin.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ConfirmRoleComponent } from '../confirm-role/confirm-role.component';
import { MatIconModule } from '@angular/material';
import { MatButtonModule} from '@angular/material';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [NotificationsAdminComponent,
    ConfirmRoleComponent],
  exports: [NotificationsAdminComponent,
    ConfirmRoleComponent],
  providers: []
})
export class NotificationsAdminModule {
}
