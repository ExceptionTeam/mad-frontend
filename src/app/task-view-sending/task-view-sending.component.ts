import { Component, Input } from '@angular/core';
import { TaskFullDStudent } from '../task-sending-page/task-sending-page.type';

@Component({
  selector: 'exc-task-view-sending',
  templateUrl: './task-view-sending.component.html',
  styleUrls: ['./task-view-sending.component.scss']
})
export class TaskViewSendingComponent {
  @Input() task: TaskFullDStudent;

  constructor() {
  }
}
