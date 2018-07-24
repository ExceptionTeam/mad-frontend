import { Component, Input } from '@angular/core';
import { InputOutputFiles } from 'src/app/Types/InputOutputFiles.type';
import { TaskFullInfo } from 'src/app/Types/TaskFullInfo.type';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'exc-task-edit-create-page',
  templateUrl: './task-edit-create-page.component.html',
  styleUrls: ['./task-edit-create-page.component.scss']
})
export class TaskEditCreatePageComponent {
  @Input() validFiles: boolean;
  @Input() taskInfo: TaskFullInfo;
  InputOutputFiles: InputOutputFiles[];
  buttonName: string;
  marks = [4, 5, 6, 7, 8, 9, 10];
  private id;

  constructor(private activatedRoute: ActivatedRoute, private location: Location,
              private tasksService: TaskService
  ) {
    this.validFiles = this.validFiles || false;
    this.taskInfo = this.taskInfo || {
      name: '',
      description: '',
      inputFilesId: [],
      outputFilesId: [],
      weight: 10,
      tags: []
    };
    this.buttonName = 'Добавить';
    this.id = this.activatedRoute.snapshot.params.id;
    // console.log('id: ', this.id);
    if (this.id !== undefined) {
      tasksService.getInfoEditTask(this.id).subscribe(data => {
          this.taskInfo = data;
        }
      );
      this.buttonName = 'Изменить';
      this.validFiles = true;
    }
  }

  onSubmit(value) {
    const formData = new FormData();
    formData.append('name', value.name);
    formData.append('description', value.description);
    formData.append('tags', value.tags);
    formData.append('weight', value.weight);
    if (this.id === undefined) {
      this.taskInfo.inputFilesId.forEach(function (item) {
        formData.append('editInput ', item.id);
      });
      this.taskInfo.outputFilesId.forEach(function (item) {
        formData.append('editOutput ', item.id);
      });
    }
    this.InputOutputFiles.forEach(function (item, i) {
      formData.set('input' + (i + 1), item.input);
      formData.set('output' + (i + 1), item.output);
    });
    console.log(formData.get('input' + 1));
    // this.tasksService.postEditTaskTeacher(formData).subscribe();
  }

  changeValidState(event) {
    console.log(event);
    this.validFiles = event;
  }

  changeFiles(files) {
    this.InputOutputFiles = files;
  }

  changeEditFiles(files) {
    this.taskInfo.inputFilesId = files.inputFilesId;
    this.taskInfo.outputFilesId = files.outputFilesId;
  }
}
