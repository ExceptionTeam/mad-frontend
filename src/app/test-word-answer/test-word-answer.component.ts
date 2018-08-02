import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'exc-test-word-answer',
  templateUrl: './test-word-answer.component.html',
  styleUrls: ['./test-word-answer.component.scss']
})
export class TestWordAnswerComponent implements OnInit {
  @Input() studentAnswer: string;
  @Input() question: string;
  @Input() disabled: boolean;
  @Output() studentAnswerChange = new EventEmitter<string>();

  constructor() {
    this.disabled = false;
  }

  ngOnInit() {
  }

  changeAnswer(event) {
    this.studentAnswer = event.target.value;
    this.studentAnswerChange.emit(this.studentAnswer);
  }
}
