import { Component, Input } from '@angular/core';
import { TaskFullDescrTeacherComponent } from '../task-full-descr-teacher/task-full-descr-teacher.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'exc-table-my-tasks-teacher',
  templateUrl: './table-my-tasks-teacher.component.html',
  styleUrls: ['./table-my-tasks-teacher.component.scss']
})
export class TableMyTasksTeacherComponent {
  @Input() tasks: string[];
  displayedColumns: string[] = ['name', 'weight', 'appoint'];

  constructor(public dialog: MatDialog) {
  }

  public onClickName() {
    this.dialog.open(TaskFullDescrTeacherComponent);
  }
}
