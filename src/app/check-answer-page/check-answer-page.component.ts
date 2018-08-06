import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { UserService } from '../user.service';
import { TestService } from '../test.service';
import { CheckQuestion } from './question.type';

@Component({
  selector: 'exc-check-answer-page',
  templateUrl: './check-answer-page.component.html',
  styleUrls: ['./check-answer-page.component.scss']
})
export class CheckAnswerPageComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  onDisplay: CheckQuestion[];
  length: number;

  constructor(private testService: TestService,
              private userService: UserService) {
    this.userService.getInfo().subscribe(user => {
      this.testService.getCheckingQuestions(user.id, 0, 2).subscribe(data => {
        console.log('questions, ', data);
        this.onDisplay = data.requests;
        this.length = data.amount;
      });
    });
  }

  onPaginateChange() {
    this.testService.getCheckingQuestions(this.userService.id, this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageIndex * this.paginator.pageSize + this.paginator.pageSize).subscribe(data => {
      this.onDisplay = data.requests;
      this.length = data.amount;
    });
  }

  onclickConfirm(request, done) {
    request.display = false;
    request.onclickDone = done;
    if (done) {
      this.testService.confirmAnswer(request._id, true).subscribe();
    } else {
      this.testService.confirmAnswer(request._id, false).subscribe();
    }
  }
}
