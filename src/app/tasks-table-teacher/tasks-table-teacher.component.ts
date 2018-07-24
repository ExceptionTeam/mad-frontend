import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator } from '@angular/material';
import { TaskAssigningWindowComponent } from '../task-assigning-window/task-assigning-window.component';
import { AllTasksTeacherService, Task } from '../allTasksTeacher.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'exc-tasks-table-teacher',
  templateUrl: './tasks-table-teacher.component.html',
  styleUrls: ['./tasks-table-teacher.component.scss']
})
export class TasksTableTeacherComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'weight', 'appoint'];
  dataSource: UserDataSource | null;

  constructor(public dialog: MatDialog, private allTasksService: AllTasksTeacherService) {
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

  public openModal(id) {
    this.dialog.open(TaskAssigningWindowComponent, {
      data: {
        _id: id
      }
    });
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(
    private allTasksService: AllTasksTeacherService,
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

