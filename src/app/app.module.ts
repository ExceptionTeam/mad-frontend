import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout-navigation/layout.module';
import { TeacherTasksModule } from './table-my-tasks-teacher/teacher-tasks.module';
import { StudentTasksModule } from './student-tasks-table/student-tasks.module';
import { TaskSendingModule } from './task-sending-page/task-sending.module';
import { AssigningTaskModule } from './assign-a-task/assigning-task.module';
import { TaskEditCreateModule } from './task-edit-create-page/task-edit-create-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    TeacherTasksModule,
    StudentTasksModule,
    TaskSendingModule,
    AssigningTaskModule,
    TaskEditCreateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
