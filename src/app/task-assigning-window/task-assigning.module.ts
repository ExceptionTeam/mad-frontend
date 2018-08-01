import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TaskAssigningWindowComponent } from './task-assigning-window.component';
import { TaskSelectStudentOrGroupComponent } from '../task-select-student-or-group/task-select-student-or-group.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatMomentDateModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    TaskAssigningWindowComponent,
    TaskSelectStudentOrGroupComponent
  ],
  exports: [TaskAssigningWindowComponent, TaskSelectStudentOrGroupComponent],
  providers: [],
  entryComponents: [TaskAssigningWindowComponent]
})
export class TaskAssigningModule {
}
