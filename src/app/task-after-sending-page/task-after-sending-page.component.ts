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
    console.log('id: ', id);
    tasksService.getInfoTaskTry(id).subscribe(files => {
      this.files = files;
      console.log(files);
      this.files.forEach((item, index) => {
        console.log(item);
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
  }
}
