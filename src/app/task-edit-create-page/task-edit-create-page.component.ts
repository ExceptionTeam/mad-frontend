import { Component, Input } from '@angular/core';
import { InputOutputFiles } from 'src/app/InputOutputFiles.type';

export interface TaskEditInfo {
  type: string;
  editFiles: InputOutputFiles [];
  name: string;
  description: string;
}

@Component({
  selector: 'exc-task-edit-create-page',
  templateUrl: './task-edit-create-page.component.html',
  styleUrls: ['./task-edit-create-page.component.scss']
})
export class TaskEditPageComponent {
  // validFiles = true;
  // editFiles = [{input: 'inp1', output: 'out1'}];
  // name = 'Task12';
  // description = 'gyufihshidjshaebfkdshfkeashfoels';
  // InputOutputFiles: InputOutputFiles[] = [];
  @Input() validFiles: boolean;
  @Input() taskInfo: TaskEditInfo;
  InputOutputFiles: InputOutputFiles [];
  constructor() {
  }

  onSubmit(value) {
    console.log(value.name);
    console.log(value.description);
    console.log(this.InputOutputFiles);
    console.log(this.taskInfo.editFiles);
  }

  changeValidState(event) {
    console.log(event);
    this.validFiles = event;
  }

  onDelete(event, i) {
    this.taskInfo.editFiles.splice(i, 1);
  }

  changeFiles(files) {
    this.InputOutputFiles = files;
  }

  changeEditFiles(files) {
    this.taskInfo.editFiles = files;
  }
}
