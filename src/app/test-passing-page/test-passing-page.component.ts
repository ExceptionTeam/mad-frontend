import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { TestService } from '../test.service';
import { TestPassedInfo } from 'src/app/Types/TestPassedInfo.type';
import { Question } from '../Types/Question.type';
import { Answer } from '../Types/Answer.type';

@Component({
  selector: 'exc-test-passing-page',
  templateUrl: './test-passing-page.component.html',
  styleUrls: ['./test-passing-page.component.scss']
})
export class TestPassingPageComponent implements OnInit {
  test: TestPassedInfo;
  disabled: boolean;
  req: Question;
  timer: string;
  buttonType: string;
  body = [];

  constructor(private router: Router,
    private userService: UserService,
    private testService: TestService,
    private activatedRoute: ActivatedRoute
  ) {
    userService.getInfo().subscribe(user => {
      if (user.role === 'STUDENT') {
        console.log(user.id);
        testService.loadTest(this.activatedRoute.snapshot.params.id, user.id).subscribe(
          info => {
            console.log(info);
            this.test = info;
            this.test.questionsId.map(value => value.studentAnswer = []);
            this.req = info.questionsId[0];
            timer(0, 1000).pipe(
              take(this.test.timeToPass),
              map(tick => {
                this.timer = (`0${Math.floor((this.test.timeToPass - tick) / 60)}`).slice(-2) + ':' +
                  (`0${(this.test.timeToPass - tick - 1) % 60}`).slice(-2);
                if (this.timer === '0:0') {
                  this.router.navigate([`/test/tests-table`]);
                }
              })).subscribe();
          },
          err => console.log(err));
        this.disabled = false;
        this.buttonType = 'завершить тест';
      } else {
        this.disabled = true;
        this.buttonType = 'завершить просмотр';
        this.testService.loadStudentSubmissionTeacher(this.activatedRoute.snapshot.params.id,
          this.activatedRoute.snapshot.queryParams.studId).subscribe(
          item => {
            this.test = item[0];
            this.test.questionsId.forEach((question, i) => question.studentAnswer = this.test.answers[i].answ);
            this.req = this.test.questionsId[0];
          });
      }
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  onPaginateChange() {
    if (this.test) {
      this.req = this.test.questionsId[this.paginator.pageIndex];
    }
  }

  ngOnInit() {

  }

  onClick() {
    this.test.questionsId.forEach((item, i) => {
      console.log(item.category);
      this.body.push((item.category === 'MULTIPLE_ANSWERS' || item.category === 'SINGLE_ANSWER') ? {
        answ: item.studentAnswer,
        questionId: item._id
      } : {
          answ: item.studentAnswer,
          questionId: item._id,
          checking: 'true'
        });
    });
    this.testService.sendAnswersTest(this.test._id, this.body).subscribe(answ => {
      this.router.navigate([`/test/tests-table`]);
    }
    );
  }
}
