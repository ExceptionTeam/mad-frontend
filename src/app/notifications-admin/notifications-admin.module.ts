import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsAdminComponent } from './notifications-admin.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ConfirmRoleComponent } from '../confirm-role/confirm-role.component';
import { MatButtonModule, MatIconModule, MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfirmTrainingTestComponent } from '../confirm-training-test/confirm-training-test.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CheckAnswerPageComponent } from '../check-answer-page/check-answer-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatPaginatorModule,
    MatBadgeModule
  ],
  declarations: [NotificationsAdminComponent,
    ConfirmRoleComponent,
    ConfirmTrainingTestComponent,
    CheckAnswerPageComponent
  ],
  exports: [NotificationsAdminComponent,
    ConfirmRoleComponent,
    ConfirmTrainingTestComponent,
    CheckAnswerPageComponent
  ],
  providers: []
})
export class NotificationsAdminModule {
}
