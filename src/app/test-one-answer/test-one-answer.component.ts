import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'exc-test-one-answer',
  templateUrl: './test-one-answer.component.html',
  styleUrls: ['./test-one-answer.component.scss']
})
export class TestOneAnswerComponent {
  @Input() answers: string[];
  @Input() question: string;
  @Input() disabled: boolean;
  @Input() studentAnswer: string[];
  @Output() studentAnswerChange = new EventEmitter<string[]>();
  constructor() {
    this.disabled = false;
  }

  changeValue(event) {
    this.studentAnswer[0] = event.value;
    this.studentAnswerChange.emit(this.studentAnswer);
  }
}
