import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../Types/Question.type';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'exc-test-passing-page',
  templateUrl: './test-passing-page.component.html',
  styleUrls: ['./test-passing-page.component.scss']
})
export class TestPassingPageComponent implements OnInit {
  questions: Question[];
  role: string;
  disabled: boolean;
  req: Question;
  timer: string;
  stopTime = 121;
  buttonType: string;

  constructor() {
    this.role = 'student';
    if (this.role === 'student') {
      this.disabled = false;
      this.buttonType = 'завершить тест';
      timer(0, 1000).pipe(
        take(this.stopTime),
        map(tick => {
          this.timer = (`0${Math.floor((this.stopTime - tick) / 60)}`).slice(-2) + ':' +
            (`0${(this.stopTime - tick - 1) % 60}`).slice(-2);
          if (this.timer === '0:0') {
            console.log('kek');
          }
        })
      ).subscribe();
    } else {
      this.disabled = true;
      this.buttonType = 'завершить просмотр';
    }
    this.questions = [{
      type: 'oneAnswer',
      description: 'What is my name?',
      answers: ['lili', 'kek', 'lol', 'hkh'],
      studentAnswer: ['lili']
    },
    {
      type: 'severalAnswer',
      description: 'What is my name?',
      answers: ['lili', 'kek', 'lili', 'hkh'],
      studentAnswer: ['lili', 'kek']
    },
    {
      type: 'wordAnswer',
      description: 'What is my name?'
    },
    {
      type: 'severalWordAnswer',
      description: 'What is my name and surname?'
    }];
    this.req = this.questions[0];
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  onPaginateChange() {
    this.req = this.questions[this.paginator.pageIndex];
  }

  ngOnInit() {
  }
}
