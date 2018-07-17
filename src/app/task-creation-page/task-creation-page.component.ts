import { Component, Input } from '@angular/core';

@Component({
  selector: 'exc-task-creation-page',
  templateUrl: './task-creation-page.component.html',
  styleUrls: ['./task-creation-page.component.scss']
})
export class TaskCreationPageComponent {
  @Input() validFiles = false;
  name: String;
  description: String;
  InputOutputFiles: File[] = [];

  constructor() {
  }

  onSubmit(value) {
    console.log(value.name);
    console.log(value.description);
    console.log(this.InputOutputFiles);
  }

  changeValidState(event) {
    this.validFiles = event;
  }

  onClickSend() {
    alert('Зачада успешно добавлена');
  }
}
