import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksTeacherComponent } from './all-tasks-teacher/all-tasks-teacher.component';
import { StudentTasksTableComponent } from './student-tasks-table/student-tasks-table.component';
import { TaskCreationPageComponent } from './task-creation-page/task-creation-page.component';
import { TaskSendingPageComponent } from './task-sending-page/task-sending-page.component';

const routes: Routes = [
  {
    path: 'tasks-teacher',
    component: AllTasksTeacherComponent
  },
  {
    path: 'tasks-student',
    component: StudentTasksTableComponent
  },
  {
    path: 'add-task',
    component: TaskCreationPageComponent
  },
  {
    path: 'send-task',
    component: TaskSendingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
