import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material';
import { Task } from '../tasks.service';
import { TasksService } from '../tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'exc-student-tasks-table',
  templateUrl: './student-tasks-table.component.html',
  styleUrls: ['./student-tasks-table.component.scss']
})
export class StudentTasksTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'file', 'tests', 'teacher', 'mark'];
  dataSource: UserDataSource | null;
  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private tasksService: TasksService) {}

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
}

export class UserDataSource extends DataSource<any> {
  constructor(
    private tasksService: TasksService,
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
  disconnect() { }
}
