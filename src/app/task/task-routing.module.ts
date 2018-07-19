import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksTeacherComponent } from '../all-tasks-teacher/all-tasks-teacher.component';
import { StudentTasksTableComponent } from '../student-tasks-table/student-tasks-table.component';
import { TaskEditCreatePageComponent } from '../task-edit-create-page/task-edit-create-page.component';
import { TaskSendingPageComponent } from '../task-sending-page/task-sending-page.component';
import { TaskFullDescrTeacherComponent } from '../task-full-descr-teacher/task-full-descr-teacher.component';

const taskRoutes: Routes = [
  {
    path: 'task',
    children: [
      {
        path: 'table-teacher',
        component: AllTasksTeacherComponent
      },
      {
        path: 'table-teacher/:id',
        component: TaskFullDescrTeacherComponent
      },
      {
        path: 'table-student',
        component: StudentTasksTableComponent
      },
      {
        path: 'add-task',
        component: TaskEditCreatePageComponent
      },
      {
        path: 'send-task',
        component: TaskSendingPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(taskRoutes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {
}

