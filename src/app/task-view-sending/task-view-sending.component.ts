import { Component, Input } from '@angular/core';
import { TaskFullDStudent } from '../Types/TaskFullDStudent.type';

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
