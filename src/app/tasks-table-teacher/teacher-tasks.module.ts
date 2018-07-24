import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule, MatPaginatorModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { TasksTeacherPageComponent } from '../tasks-teacher-page/tasks-teacher-page.component';
import { TasksTableTeacherComponent } from './tasks-table-teacher.component';
import { RouterModule } from '@angular/router';
import { MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    RouterModule,
    MatTooltipModule
  ],
  declarations: [
    TasksTeacherPageComponent,
    TasksTableTeacherComponent
  ],
  exports: [TasksTableTeacherComponent],
  providers: [],
  entryComponents: []
})
export class TeacherTasksModule {
}
