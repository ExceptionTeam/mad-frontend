import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksTeacherPageComponent } from '../tasks-teacher-page/tasks-teacher-page.component';
import { TasksStudentPageComponent } from '../tasks-student-page/tasks-student-page.component';
import { TaskEditCreatePageComponent } from '../task-edit-create-page/task-edit-create-page.component';
import { TaskSendingPageComponent } from '../task-sending-page/task-sending-page.component';
import { TaskFullDescrTeacherComponent } from '../task-full-descr-teacher-page/task-full-descr-teacher.component';
import { TaskAfterSendingPageComponent } from '../task-after-sending-page/task-after-sending-page.component';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';

const taskRoutes: Routes = [
  {
    path: 'task',
    children: [
      {
        path: 'table-teacher',
        component: TasksTeacherPageComponent
      },
      {
        path: 'table-teacher/:id',
        component: TaskFullDescrTeacherComponent
      },
      {
        path: 'table-student',
        component: TasksStudentPageComponent
      },
      {
        path: 'table-student/:id',
        component: TaskSendingPageComponent
      },
      {
        path: 'add-task',
        component: TaskEditCreatePageComponent
      },
      {
        path: 'sended-task',
        component: TaskAfterSendingPageComponent
      },
      {
        path: 'edit-task/:id',
        component: TaskEditCreatePageComponent
      },
      {
        path: 'attempts/:id',
        component: TaskAfterSendingPageComponent
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

