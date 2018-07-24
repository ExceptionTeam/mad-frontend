import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { TasksStudentPageComponent } from './tasks-student-page.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule
  ],
  declarations: [
    TasksStudentPageComponent
  ],
  exports: [TasksStudentPageComponent],
  providers: [],
})
export class TasksStudentModule {
}
