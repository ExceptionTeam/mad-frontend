import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { TestService } from '../test.service';
import { TestPassedInfo } from 'src/app/Types/TestPassedInfo.type';
import { Question } from '../Types/Question.type';
import { Answer } from '../Types/Answer.type';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'exc-test-passing-page',
  templateUrl: './test-passing-page.component.html',
  styleUrls: ['./test-passing-page.component.scss']
})
export class TestPassingPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  test: TestPassedInfo;
  disabled: boolean;
  req: Question;
  timer: string;
  buttonType: string;
  body = [];

  constructor(private router: Router,
    private userService: UserService,
    private testService: TestService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
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
                if (this.timer === '00:00') {
                  this.sendInfo();
                }
              })).subscribe();
          },
          err => console.log(err));
        this.disabled = false;
        this.buttonType = 'Завершить тест';
      } else {
        this.disabled = true;
        this.buttonType = 'Завершить просмотр';
        this.testService.loadStudentSubmissionTeacher(this.activatedRoute.snapshot.params.id,
          this.activatedRoute.snapshot.queryParams.studId).subscribe(
          item => {
            this.test = item[0];
            this.test.questionsId.forEach((question, i) => {
              if (this.test.answers[i].answ) {
                question.studentAnswer = this.test.answers[i].answ;
              } else {
                question.studentAnswer = [];
              }
            });
            console.log(this.test);
            this.req = this.test.questionsId[0];
          });
      }
    });
  }

  onPaginateChange() {
    if (this.test) {
      this.req = this.test.questionsId[this.paginator.pageIndex];
    }
  }

  ngOnInit() {
  }

  sendInfo() {
    this.test.questionsId.forEach((item, i) => {
      console.log(item.category);
      this.body.push((item.category === 'MULTIPLE_ANSWERS' || item.category === 'SINGLE_ANSWER') ? {
        answ: item.studentAnswer,
        questionId: item._id
      } : {
          answ: item.studentAnswer,
          questionId: item._id,
          checking: true,
        });
    });
    this.testService.sendAnswersTest(this.test._id, this.body).subscribe(answ => {
      this.router.navigate([`/test/tests-table`]);
    }
    );
  }

  onClick() {
    if (this.buttonType === 'Завершить тест') {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '350px',
        data: this.test
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      this.router.navigate([`/test/assigned-tests`]);
    }
  }

}

@Component({
  selector: 'exc-dialog-content-example-dialog',
  templateUrl: 'dialog.html',
})

export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public test,
    public testService: TestService,
    private router: Router
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSend() {
    const body = [];
    console.log(this.test);
    this.test.questionsId.forEach((item, i) => {
      body.push((item.category === 'MULTIPLE_ANSWERS' || item.category === 'SINGLE_ANSWER') ? {
        answ: item.studentAnswer,
        questionId: item._id
      } : {
          answ: item.studentAnswer,
          questionId: item._id,
          checking: 'true',
        });
    });
    this.testService.sendAnswersTest(this.test._id, body).subscribe(answ => {
      this.dialogRef.close();
      this.router.navigate([`/test/tests-table`]);
    }
    );
  }
}
