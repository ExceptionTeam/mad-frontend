import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskViewSendingComponent } from '../task-view-sending/task-view-sending.component';
import { FileUploadingComponent } from '../file-uploading/file-uploading.component';
import { TaskSendingPageComponent } from './task-sending-page.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    AppRoutingModule
  ],
  declarations: [
    TaskSendingPageComponent,
    FileUploadingComponent,
    TaskViewSendingComponent
  ],
  exports: [TaskSendingPageComponent, FileUploadingComponent],
  providers: [],
})
export class TaskSendingModule { }

