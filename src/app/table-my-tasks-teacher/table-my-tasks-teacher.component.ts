import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, PageEvent } from '@angular/material';
import { AssignATaskComponent } from '../assign-a-task/assign-a-task.component';
import { TaskFullDescrTeacherComponent } from '../task-full-descr-teacher/task-full-descr-teacher.component';
import { TasksService } from '../tasks.service';
import { UserDataSource } from '../student-tasks-table/student-tasks-table.component';

@Component({
  selector: 'exc-table-my-tasks-teacher',
  templateUrl: './table-my-tasks-teacher.component.html',
  styleUrls: ['./table-my-tasks-teacher.component.scss']
})
export class TableMyTasksTeacherComponent implements OnInit {
  @Input() tasks: string[];
  dataSource: UserDataSource | null;
  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'weight', 'appoint'];

  constructor(public dialog: MatDialog, private tasksService: TasksService) {
  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.dataSource = new UserDataSource(this.tasksService, this.paginator);
  }

  onPaginateChange(event) {
    this.pageEvent = event;
    this.dataSource = new UserDataSource(this.tasksService, this.paginator);
  }

  getLength() {
    return this.tasksService.getLength();
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
