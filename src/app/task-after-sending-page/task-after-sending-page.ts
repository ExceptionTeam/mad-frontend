import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TaskPassedTestsComponent } from '../task-passed-tests/task-passed-tests.component';
import { TaskAfterSendingPageComponent } from './task-after-sending-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
// import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    // RouterModule
  ],
  declarations: [
    TaskPassedTestsComponent,
    TaskAfterSendingPageComponent
  ],
  exports: [],
  providers: [],
})
export class TaskAfterSendingPage {
}
