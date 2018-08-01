import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'exc-test-one-answer',
  templateUrl: './test-one-answer.component.html',
  styleUrls: ['./test-one-answer.component.scss']
})
export class TestOneAnswerComponent implements OnInit {
  @Input() answers;
  @Input() studentAnswer;
  @Output() studentAnswerChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  changeValue(event) {
    this.studentAnswer = event.value;
    console.log(this.studentAnswer);
    this.studentAnswerChange.emit(this.studentAnswer);
  }
}
