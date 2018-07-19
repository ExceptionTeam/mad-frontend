import { Component, Input } from '@angular/core';
import { InputOutputFiles } from 'src/app/InputOutputFiles.type';

@Component({
  selector: 'exc-task-edit-create-page',
  templateUrl: './task-edit-create-page.component.html',
  styleUrls: ['./task-edit-create-page.component.scss']
})
export class TaskEditPageComponent {
  validFiles  = true;
  editFiles = [{input: 'inp1', output: 'out1'}];
  name = 'Task12';
  description = 'gyufihshidjshaebfkdshfkeashfoels';
  InputOutputFiles: InputOutputFiles[] = [];

  constructor() {
  }

  onSubmit(value) {
    console.log(value.name);
    console.log(value.description);
    console.log(this.InputOutputFiles);
    console.log(this.editFiles);
  }

  changeValidState(event) {
    console.log(event);
    this.validFiles = event;
  }

  onDelete(event, i) {
    this.editFiles.splice(i, 1);
  }

  changeFiles(files) {
    this.InputOutputFiles = files;
  }

  changeEditFiles(files) {
    this.editFiles = files;
  }
}
