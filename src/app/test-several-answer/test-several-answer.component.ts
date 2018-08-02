import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exc-test-several-answer',
  templateUrl: './test-several-answer.component.html',
  styleUrls: ['./test-several-answer.component.scss']
})
export class TestSeveralAnswerComponent {
  @Input() answers;
  @Input() question: string;
  @Input() studentAnswer: string[];
  @Input() disabled: boolean;
  @Output() studentCheckboxAnswersChanged = new EventEmitter<string[]>();

  constructor() {
    this.disabled = false;
  }

  changeValue(event, index) {
    this.studentAnswer[index] = this.answers[index];
    this.studentCheckboxAnswersChanged.emit(this.studentAnswer);
  }

}
