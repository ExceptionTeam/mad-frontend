import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout-landing-page/layout.module';
import { TeacherTasksModule } from '../table-my-tasks-teacher/teacher-tasks.module';
import { StudentTasksModule } from '../student-tasks-table/student-tasks.module';
import { TaskSendingModule } from '../task-sending-page/task-sending.module';
import { AssigningTaskModule } from '../assign-a-task/assigning-task.module';
import { TaskEditCreateModule } from '../task-edit-create-page/task-edit-create-page.module';
import { AppRoutingModule } from '../app-routing.module';
import { TaskRoutingModule } from './task-routing.module';
import { AfterSendingTaskModule } from '../after-sending-task-page/after-sending-task.module';

@NgModule({
  imports: [
    TaskRoutingModule,
    LayoutModule,
    TeacherTasksModule,
    StudentTasksModule,
    TaskSendingModule,
    AssigningTaskModule,
    TaskEditCreateModule,
    AppRoutingModule,
    AfterSendingTaskModule
  ],
  exports: [LayoutModule],
  declarations: [],
})
export class TaskModule {
}
