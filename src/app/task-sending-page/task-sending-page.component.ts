import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksTeacherService } from 'src/app/tasks.service';

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

  constructor(private tasksService: TasksTeacherService,
              private activatedRoute: ActivatedRoute) {
  }

  onClick(event) {
    console.log(this.file);
    const id = this.activatedRoute.snapshot.params.id;
    console.log('id: ', id);
    const formData = new FormData();
    formData.append('solutionFile', this.file);
    formData.append('id', id);
    // this.tasksService.postSendTaskStudent(formData).subscribe();
  }

  onFileChanged(event) {
    this.file = event;
  }
}
