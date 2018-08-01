import { Component, Input } from '@angular/core';
import { InputOutputFiles } from 'src/app/Types/InputOutputFiles.type';
import { TaskFullInfo } from 'src/app/Types/TaskFullInfo.type';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute,
    private tasksService: TaskService,
    private router: Router
  ) {
    this.validFiles = this.validFiles || false;
    this.taskInfo = this.taskInfo || {
      name: '',
      description: '',
      inputFilesId: [],
      outputFilesId: [],
      weight: 10,
      tags: ''
    };
    this.buttonName = 'Добавить';
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id !== undefined) {
      tasksService.getTaskFullInfoTeacher(this.id).subscribe(data => {
        this.taskInfo = data;
        console.log(this.taskInfo);
      }
      );
      this.buttonName = 'Изменить';
      this.validFiles = true;
    }
  }

  onSubmit(value) {
    const formData = new FormData();
    let counter = this.taskInfo.inputFilesId ? this.taskInfo.inputFilesId.length : 0;
    formData.append('name', value.name);
    formData.append('description', value.description);
    formData.append('tags', value.tags);
    formData.append('weight', value.weight);
    if (this.id !== undefined) {
      this.taskInfo.inputFilesId.forEach(function (item, i) {
        formData.set('input' + (i + 1), item._id);
      });
      this.taskInfo.outputFilesId.forEach(function (item, i) {
        formData.set('output' + (i + 1), item._id);
      });
    }
    if (this.InputOutputFiles) {
      this.InputOutputFiles.forEach(function (item, i) {
        formData.set('input' + (i + 1 + counter), item.input);
        formData.set('output' + (i + 1 + counter), item.output);
      });
      counter += this.InputOutputFiles.length;
    }
    if (this.id === undefined) {
      this.tasksService.postAddTaskTeacher(formData, this.InputOutputFiles.length).subscribe(
        data => this.router.navigate([`/task/table-teacher`])
      );
    } else {
      this.tasksService.postEditTaskTeacher(formData, this.id, counter).subscribe(
        data => this.router.navigate([`/task/table-teacher`])
      );
    }
  }

  changeValidState(event) {
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
