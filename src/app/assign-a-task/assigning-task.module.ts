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
import { AssignATaskComponent } from './assign-a-task.component';
import { SelectStudentOrGroupComponent } from '../select-student-or-group/select-student-or-group.component';

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
    MatMomentDateModule
  ],
  declarations: [
    AssignATaskComponent,
    SelectStudentOrGroupComponent
  ],
  exports: [AssignATaskComponent],
  providers: [],
  entryComponents: [AssignATaskComponent]
})
export class AssigningTaskModule { }
