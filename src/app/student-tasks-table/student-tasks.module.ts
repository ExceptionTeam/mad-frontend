import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { StudentTasksTableComponent } from './student-tasks-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [
    StudentTasksTableComponent
  ],
  exports: [StudentTasksTableComponent],
  providers: [],
})
export class StudentTasksModule { }
