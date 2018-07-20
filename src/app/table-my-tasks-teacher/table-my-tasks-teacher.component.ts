import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator } from '@angular/material';
import { AssignATaskComponent } from '../assign-a-task/assign-a-task.component';
import { AllTasksTeacherService, Task } from '../allTasksTeacher.service';
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

  public openModal() {
    this.dialog.open(AssignATaskComponent);
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

