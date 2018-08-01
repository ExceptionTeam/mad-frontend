import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exc-test-several-answer',
  templateUrl: './test-several-answer.component.html',
  styleUrls: ['./test-several-answer.component.scss']
})
export class TestSeveralAnswerComponent implements OnInit {
  @Input() answers;
  @Input() studentCheckboxAnswers;
  @Output() studentCheckboxAnswersChanged = new EventEmitter<boolean[]>();

  constructor() { }

  ngOnInit() {
  }

  changeValue(event, index) {
    this.studentCheckboxAnswers[index] = event.checked;
    console.log(event);
    this.studentCheckboxAnswersChanged.emit(this.studentCheckboxAnswers);
  }

}
