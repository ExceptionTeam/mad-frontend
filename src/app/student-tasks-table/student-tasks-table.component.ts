import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { Task } from '../allTasksStudent.service';
import { AllTasksStudentService } from '../allTasksStudent.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'exc-student-tasks-table',
  templateUrl: './student-tasks-table.component.html',
  styleUrls: ['./student-tasks-table.component.scss']
})
export class StudentTasksTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'file', 'tests', 'teacher', 'mark'];
  dataSource: UserDataSource | null;

  constructor(private tasksService: AllTasksStudentService) {
  }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.tasksService, this.paginator);
  }

  onPaginateChange() {
    this.dataSource = new UserDataSource(this.tasksService, this.paginator);
  }

  getLength() {
    return this.tasksService.getLength();
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(
    private tasksService: AllTasksStudentService,
    private paginator: MatPaginator
  ) {
    super();
  }

  connect(): Observable<Task[]> {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return this.tasksService.getTasks(
      startIndex,
      startIndex + this.paginator.pageSize
    );
  }

  disconnect() {
  }
}
