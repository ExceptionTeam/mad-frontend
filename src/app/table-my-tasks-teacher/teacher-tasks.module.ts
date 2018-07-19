import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AssigningTaskModule } from '../assign-a-task/assigning-task.module';
import { AllTasksTeacherComponent } from '../all-tasks-teacher/all-tasks-teacher.component';
import { TaskFullDescrTeacherComponent } from '../task-full-descr-teacher/task-full-descr-teacher.component';
import { TableMyTasksTeacherComponent } from './table-my-tasks-teacher.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    AssigningTaskModule
  ],
  declarations: [
    AllTasksTeacherComponent,
    TaskFullDescrTeacherComponent,
    TableMyTasksTeacherComponent
  ],
  exports: [TableMyTasksTeacherComponent],
  providers: [],
  entryComponents: [TaskFullDescrTeacherComponent]
})
export class TeacherTasksModule { }
