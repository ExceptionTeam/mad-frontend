import { Component } from '@angular/core';
import { TaskSubmition } from 'src/app/Types/TaskSubmition.type';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'exc-task-after-sending-page',
  templateUrl: './task-after-sending-page.component.html',
  styleUrls: ['./task-after-sending-page.component.scss']
})
export class TaskAfterSendingPageComponent {
  taskName = 'Название Задачи';
  files: TaskSubmition[] = [];
  passedTests: number[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private tasksService: TaskService) {
    const id = this.activatedRoute.snapshot.params.id;
    tasksService.getInfoTaskTry(id).subscribe(files => {
      console.log(files);
      this.files = files;
      this.files.forEach((item, index) => {
        this.passedTests[index] = 0;
        item.tests.forEach(value => {
          if (value === true) {
            this.passedTests[index] += 1;
          }
        });
      });
    });
  }

  clickHref(event) {
    event.stopPropagation();
    this.tasksService.downloadTaskStudent('5b4e060cd1da4c3a400e432a').subscribe(
      res => {
        const file = new Blob([res], {type: 'text/plain charset=utf-8'});
        const url = window.URL.createObjectURL(file);
        window.open(url);
      },
      err => console.log(err)
    );
  }
}
