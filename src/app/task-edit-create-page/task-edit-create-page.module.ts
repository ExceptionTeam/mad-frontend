import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material';
import { TaskSendingModule } from '../task-sending-page/task-sending.module';
import { TaskInputOutputFilesComponent } from '../task-input-output-files/task-input-output-files.component';
import { TaskEditCreatePageComponent } from './task-edit-create-page.component';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    TaskSendingModule,
    MatInputModule,
    MatSnackBarModule
  ],
  declarations: [
    TaskInputOutputFilesComponent,
    TaskEditCreatePageComponent
  ],
  exports: [TaskEditCreatePageComponent ],
  providers: [],
})
export class TaskEditCreateModule {
}
