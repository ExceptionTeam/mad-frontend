import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { TaskFullDStudent } from '../Types/TaskFullDStudent.type';

/*import {Http} from '@angular/http';*/

export interface DataPost {
  taskId: string;
  studentId: string;
}

@Component({
  selector: 'exc-task-sending-page',
  templateUrl: './task-sending-page.component.html',
  styleUrls: ['./task-sending-page.component.scss']
})
export class TaskSendingPageComponent {
  file: File;
  dataPost: DataPost;
  task: TaskFullDStudent;

  constructor(/*public http: Http*/
              private activatedRoute: ActivatedRoute,
              private taskService: TaskService) {
    const id = this.activatedRoute.snapshot.params.id;
    this.taskService.getStudentFullDescription(id).subscribe(task => {
      this.task = task;
      console.log(task);
      this.task.deadline = new Date(this.task.deadline);
    });
  }

  onClick(event) {
    // console.log(this.file);
    const id = this.activatedRoute.snapshot.params.id;
    console.log('id: ', id);
    const formData = new FormData();
    formData.append('srcFile', this.file);
    // formData.append('id', id);
    this.taskService.submitTask(formData, id).subscribe();
    // this.tasksService.postSendTaskStudent(formData).subscribe();
  }

  onFileChanged(event) {
    this.file = event;
  }
}
