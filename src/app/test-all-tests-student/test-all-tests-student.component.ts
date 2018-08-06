import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { TestService } from '../test.service';
import { TestInfoStudent, Test } from '../Types/TestInfoStudent.type';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'exc-test-all-tests-student',
  templateUrl: './test-all-tests-student.component.html',
  styleUrls: ['./test-all-tests-student.component.scss']
})
export class TestAllTestsStudentComponent implements OnInit {
  dataSource: TestsDataSourse | null;
  amount: number;
  displayedColumns: string[] = ['name', 'deadline', 'timeToPass', 'teacher', 'button'];
  length: number;
  pageIndex: number;
  pageSize: number;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
    private userService: UserService,
    private testService: TestService) {
    this.pageIndex = 1;
    this.pageSize = 2;
  }

  public setPaginationParams(pageIndex, pageSize, length) {
    this.length = length;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
  }

  ngOnInit() {
    this.dataSource = new TestsDataSourse(this.userService, this.testService);
  }

  changePaginationParams(event) {
    this.testService.paginationParams.pageIndex = this.paginator.pageIndex;
    this.testService.paginationParams.pageSize = this.paginator.pageSize;
    this.userService.getInfo().subscribe(role => {
      this.testService.loadAllTests(role.id);
    }
    );
  }

  public getPaginationParams() {
    return this.testService.paginationParams;
  }

}

export class TestsDataSourse extends DataSource<any> {
  constructor(private userService: UserService,
    private testService: TestService) {
    super();
    this.userService.getInfo().subscribe(role => {
      this.testService.loadAllTests(role.id);
    }
    );
  }

  connect(): Observable<Test[]> {
    return this.testService.bSubject$.pipe(tap(console.log));
  }

  disconnect() { }
}
