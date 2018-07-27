import { NgModule } from '@angular/core';
import { TeacherTasksModule } from '../../tasks-table-teacher/teacher-tasks.module';
import { TasksStudentModule } from '../../tasks-student-page/tasks-student.module';
import { TaskSendingModule } from '../../task-sending-page/task-sending.module';
import { TaskAssigningModule } from '../../task-assigning-window/task-assigning.module';
import { TaskEditCreateModule } from '../../task-edit-create-page/task-edit-create-page.module';
import { AppRoutingModule } from '../../app-routing.module';
import { TaskRoutingModule } from './task-routing.module';
import { TaskAfterSendingPage } from '../../task-after-sending-page/task-after-sending-page';
import { FullDescriptionPageModule } from '../../task-full-descr-teacher-page/full-description-page.module';

@NgModule({
  imports: [
    TaskRoutingModule,
    TeacherTasksModule,
    TasksStudentModule,
    TaskSendingModule,
    TaskAssigningModule,
    TaskEditCreateModule,
    AppRoutingModule,
    TaskAfterSendingPage,
    FullDescriptionPageModule,
  ],
  exports: [],
  declarations: [],
})
export class TaskModule {
}
