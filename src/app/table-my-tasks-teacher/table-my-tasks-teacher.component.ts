import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator } from '@angular/material';
import { AssignATaskComponent } from '../assign-a-task/assign-a-task.component';
import { TaskFullDescrTeacherComponent } from '../task-full-descr-teacher/task-full-descr-teacher.component';
import { AllTasksService, Task } from '../allTasks.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'exc-table-my-tasks-teacher',
  templateUrl: './table-my-tasks-teacher.component.html',
  styleUrls: ['./table-my-tasks-teacher.component.scss']
})
export class TableMyTasksTeacherComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'weight', 'appoint'];
  dataSource: UserDataSource | null;
  chosenValue: string;

  constructor(public dialog: MatDialog, private allTasksService: AllTasksService) {
  }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.allTasksService, this.paginator);
  }

  onPaginateChange() {
    this.dataSource = new UserDataSource(this.allTasksService, this.paginator);
  }

  getLength() {
    return this.allTasksService.getLength();
  }

  public openModal() {
    this.dialog.open(AssignATaskComponent);
  }

  public onClickName() {
    this.dialog.open(TaskFullDescrTeacherComponent, {
      height: '500px'
    });
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(
    private allTasksService: AllTasksService,
    private paginator: MatPaginator
  ) {
    super();
  }

  connect(): Observable<Task[]> {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return this.allTasksService.getTasks(
      startIndex,
      startIndex + this.paginator.pageSize
    );
  }

  disconnect() {
  }
}

