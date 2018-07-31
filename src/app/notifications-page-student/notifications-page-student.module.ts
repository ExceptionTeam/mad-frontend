import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NotificationsPageStudentComponent } from './notifications-page-student.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  declarations: [NotificationsPageStudentComponent],
  exports: [NotificationsPageStudentComponent],
  providers: [],
})
export class NotificationsPageStudentModule {
}
