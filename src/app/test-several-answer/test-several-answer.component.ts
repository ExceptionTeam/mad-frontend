import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'exc-test-several-answer',
  templateUrl: './test-several-answer.component.html',
  styleUrls: ['./test-several-answer.component.scss']
})
export class TestSeveralAnswerComponent implements OnInit {
  @Input() answers: string[];
  @Input() question: string;
  @Input() studentAnswer: string[];
  checkboxes: boolean[] = [];
  @Input() disabled: boolean;
  @Output() studentCheckboxAnswersChanged = new EventEmitter<string[]>();

  constructor() {
    this.disabled = false;
  }

  ngOnInit() {
    console.log(this.studentAnswer[0]);
    this.answers.forEach((item, i) => {
      if (this.studentAnswer[i]) {
        this.checkboxes[Number(this.studentAnswer[i])] = true;
      }
    });
    this.answers.forEach((item, i) => {
      if (!this.checkboxes[i]) {
        this.checkboxes[i] = false;
      }
    });
  }

  changeValue(event, index) {
    this.checkboxes[index] = !this.checkboxes[index];
    if (this.checkboxes[index]) {
      this.studentAnswer.push(index + '');
    } else {
      console.log(this.studentAnswer);
      console.log(Number(this.studentAnswer));
      this.studentAnswer.splice(this.studentAnswer.findIndex(item => item === index + ''), 1);
    }
    console.log(this.checkboxes);
    console.log(this.studentAnswer);
    this.studentCheckboxAnswersChanged.emit(this.studentAnswer);
  }

}
