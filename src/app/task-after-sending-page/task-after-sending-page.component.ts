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
  errorCompile: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private tasksService: TaskService) {
    this.errorCompile = false;
    const id = this.activatedRoute.snapshot.params.id;
    tasksService.getInfoTaskTry(id).subscribe(files => {
      this.files = files;
      this.files.forEach((item, index) => {
        if (this.passedTests && this.passedTests.length === 0) {
          this.passedTests[index] = 0;
          item.tests.forEach(value => {
            if (value === true) {
              this.passedTests[index] += 1;
            }
          });
        } else {
          this.errorCompile = true;
        }
      });
    });
  }

  clickHref(event) {
    event.stopPropagation();
  }
}
