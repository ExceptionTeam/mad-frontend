import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { TestTeacher } from '../Types/TestsTeacher.type';
import { NavigationExtras, Router } from '@angular/router';
import { TestService } from '../test.service';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'exc-test-all-assigned-tests-page',
  templateUrl: './test-all-assigned-tests-page.component.html',
  styleUrls: ['./test-all-assigned-tests-page.component.scss']
})
export class TestAllAssignedTestsPageComponent implements OnInit {
  dataSource: TestsDataSourse | null;
  displayedColumns: string[] = ['student', 'name', 'mark', 'deadline', 'buttons'];
  displayedColumnsStudGroups: string[] = ['studGroups'];
  length: number;
  pageIndex: number;
  pageSize: number;

  constructor(private router: Router,
              private testService: TestService,
              private userService: UserService
  ) {
    this.pageIndex = 1;
    this.pageSize = 2;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
        this.testService.loadAllAssignedTests(role.id);
      }
    );
  }

  public getPaginationParams() {
    return this.testService.paginationParams;
  }

  onClick(event, id, assId) {
    const nav: NavigationExtras = {
      queryParams: {
        studId: id
      }
    };
    this.router.navigate([`test/passing/${assId}`], nav);
  }
}

export class TestsDataSourse extends DataSource<any> {
  constructor(private userService: UserService,
              private testService: TestService) {
    super();
    this.userService.getInfo().subscribe(role => {
        this.testService.loadAllAssignedTests(role.id);
      }
    );
  }

  connect(): Observable<TestTeacher[]> {
    return this.testService.bSubjectTeacher$.pipe(tap(console.log));
  }

  disconnect() {
  }
}
