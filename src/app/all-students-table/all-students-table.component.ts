import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from '../Types/TeacherTasks.type';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'exc-all-students-table',
  templateUrl: './all-students-table.component.html',
  styleUrls: ['./all-students-table.component.scss']
})
export class AllStudentsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: UserDataSource | null;
  displayedColumns: string[] = ['name', 'university'];

  constructor(private testService: TestService,
              private router: Router) {
    this.dataSource = new UserDataSource(this.testService, router);
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
  }

  public changePaginationParams() {
    this.testService.paginationParams.pageIndex = this.paginator.pageIndex;
    this.testService.paginationParams.pageSize = this.paginator.pageSize;
    if (this.router.url.includes('students')) {
      this.testService.loadUsers('student');
    } else {
      this.testService.loadUsers('teacher');
    }
  }

  public getPaginationParams() {
    return this.testService.paginationParams;
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(
    private testService: TestService,
    private router: Router
  ) {
    super();
    console.log(this.router.url);
    if (this.router.url.includes('students')) {
      this.testService.loadUsers('student');
    } else {
      this.testService.loadUsers('teacher');
    }
  }

  connect(): Observable<Task[]> {
    return this.testService.users$.pipe(tap(console.log));
  }

  disconnect() {
  }
}

