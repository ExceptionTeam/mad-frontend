import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutFooterComponent } from '../layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';
import { LayoutLandingPageComponent } from './layout-landing-page.component';
import { LayoutPersonalMenuComponent } from '../layout-personal-menu/layout-personal-menu.component';
import { LayoutNavigationComponent } from '../layout-navigation/layout-navigation.component';
import { TasksStudentModule } from '../tasks-student-page/tasks-student.module';
import { TeacherTasksModule } from '../tasks-table-teacher/teacher-tasks.module';
import { TaskAssigningModule } from '../task-assigning-window/task-assigning.module';
import { TaskSendingModule } from '../task-sending-page/task-sending.module';
import { TaskEditCreateModule } from '../task-edit-create-page/task-edit-create-page.module';
import { AdminActivityModule } from '../admin-activity/admin-activity.module';
import { TestAssignModule } from '../test-assign-page/test-assign-page.module';
import { TestQuestionsTableAdminModule } from '../test-questions-table-admin/test-questions-table-admin.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TasksStudentModule,
    TeacherTasksModule,
    TaskAssigningModule,
    TaskSendingModule,
    TaskEditCreateModule,
    AdminActivityModule,
    TestAssignModule,
    TestQuestionsTableAdminModule,
    RouterModule
  ],
  declarations: [
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutLandingPageComponent,
    LayoutPersonalMenuComponent,
    LayoutNavigationComponent
  ],
  exports: [LayoutLandingPageComponent],
  providers: [],
})
export class LayoutModule {
}
