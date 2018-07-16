import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssignATaskComponent } from '../assign-a-task/assign-a-task.component';
import { TaskFullDescrTeacherComponent } from '../task-full-descr-teacher/task-full-descr-teacher.component';

@Component({
  selector: 'exc-table-my-tasks-teacher',
  templateUrl: './table-my-tasks-teacher.component.html',
  styleUrls: ['./table-my-tasks-teacher.component.scss']
})
export class TableMyTasksTeacherComponent implements OnInit {
  @Input() tasks: string[];

  displayedColumns: string[] = ['name', 'weight', 'appoint'];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public openModal() {
    this.dialog.open(AssignATaskComponent);
  }

  public onClickName() {
    this.dialog.open(TaskFullDescrTeacherComponent, {
      height: '450px'
    });
  }
}
