import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TablePassedTestsInfoComponent } from '../table-passed-tests-info/table-passed-tests-info.component';
import { AfterSendingTaskPageComponent } from './after-sending-task-page.component';
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
    TablePassedTestsInfoComponent,
    AfterSendingTaskPageComponent
  ],
  exports: [],
  providers: [],
})
export class AfterSendingTaskModule {
}
