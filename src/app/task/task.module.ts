import { NgModule } from '@angular/core';
import { TaskRoutingModule } from './task-routing.module';
import { AfterSendingTaskModule } from '../after-sending-task-page/after-sending-task.module';

@NgModule({
  imports: [
    TaskRoutingModule,
    AfterSendingTaskModule
  ],
  declarations: [],
})
export class TaskModule {
}
