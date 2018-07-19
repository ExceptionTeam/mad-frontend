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
import { LayoutLandingPageComponent } from '../layout-landing-page/layout-landing-page.component';
import { LayoutPersonalMenuComponent } from '../layout-personal-menu/layout-personal-menu.component';
import { LayoutNavigationComponent } from './layout-navigation.component';
import { StudentTasksModule } from '../student-tasks-table/student-tasks.module';
import { TeacherTasksModule } from '../table-my-tasks-teacher/teacher-tasks.module';
import { AssigningTaskModule } from '../assign-a-task/assigning-task.module';
import { TaskSendingModule } from '../task-sending-page/task-sending.module';
import { TaskEditCreateModule } from '../task-edit-create-page/task-edit-create-page.module';
import { TaskModule } from '../task/task.module';
import {AppRoutingModule} from '../app-routing.module';

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
    StudentTasksModule,
    TeacherTasksModule,
    AssigningTaskModule,
    TaskSendingModule,
    TaskEditCreateModule,
    TaskModule,
    AppRoutingModule
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
