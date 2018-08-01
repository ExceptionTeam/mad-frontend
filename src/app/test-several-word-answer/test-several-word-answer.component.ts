import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exc-test-several-word-answer',
  templateUrl: './test-several-word-answer.component.html',
  styleUrls: ['./test-several-word-answer.component.css']
})
export class TestSeveralWordAnswerComponent implements OnInit {
  @Input() studentAnswer: string;
  @Output() studentAnswerChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeAnswer(event) {
    this.studentAnswer = event.target.value;
    this.studentAnswerChange.emit(this.studentAnswer);


  }
}
