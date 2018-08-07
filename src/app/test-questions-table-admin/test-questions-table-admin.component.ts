import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { QuestionAdmin, Question } from '../Types/QuestionAdmin.type';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'exc-test-questions-table-admin',
  templateUrl: './test-questions-table-admin.component.html',
  styleUrls: ['./test-questions-table-admin.component.scss']
})
export class TestQuestionsTableAdminComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['question', 'tags', 'active', 'type', 'difficulty'];
  dataSource: UserDataSource | null;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.dataSource = new UserDataSource(this.testService);
  }

  public changePaginationParams() {
    this.testService.paginationParams.pageIndex = this.paginator.pageIndex;
    this.testService.paginationParams.pageSize = this.paginator.pageSize;
    return this.testService.loadQuestions();
  }

  public getPaginationParams() {
    return this.testService.paginationParams;
  }

  getPrettyStatus (value) {
    if (value === true) {
      return 'Активный'; } else {
        return 'Неактивный';
      }
  }

  getPrettyType (value) {
    if (value === 'PRIMARY') {
      return 'Основной';
    } else {
      return 'Тренировочный';
    }
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private testService: TestService) {
    super();
    this.testService.loadQuestions();
  }

  connect(): Observable<Question[]> {
    return this.testService.allQuestions$.pipe(tap(console.log));
  }

  disconnect() {}
}
