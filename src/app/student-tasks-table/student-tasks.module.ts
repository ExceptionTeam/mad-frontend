import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { StudentTasksTableComponent } from './student-tasks-table.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule
  ],
  declarations: [
    StudentTasksTableComponent
  ],
  exports: [StudentTasksTableComponent],
  providers: [],
})
export class StudentTasksModule { }
