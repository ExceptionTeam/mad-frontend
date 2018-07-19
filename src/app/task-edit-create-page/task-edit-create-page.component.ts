import { Component, Input } from '@angular/core';
import { InputOutputFiles } from 'src/app/Types/InputOutputFiles.type';
import { TaskEditInfo } from 'src/app/task-edit-create-page/TaskEditInfo.type';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'exc-task-edit-create-page',
  templateUrl: './task-edit-create-page.component.html',
  styleUrls: ['./task-edit-create-page.component.scss']
})
export class TaskEditPageComponent {
  @Input() validFiles: boolean;
  @Input() taskInfo: TaskEditInfo;
  InputOutputFiles: InputOutputFiles [];

  constructor(private activatedRoute: ActivatedRoute, private location: Location) {
    this.validFiles = this.validFiles || false;
    this.taskInfo = this.taskInfo || {
      type: '',
      editFiles: '',
      name: '',
      description: ''
    };
    const id = this.activatedRoute.snapshot.params.id;
    console.log('id: ', id);
  }

  onSubmit(value) {
    console.log(value.name);
    console.log(value.description);
    console.log(this.InputOutputFiles);
    console.log(this.taskInfo.editFiles);
    console.log(this.taskInfo.editFiles);
    this.location.back();
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
