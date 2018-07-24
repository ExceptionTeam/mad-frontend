import { Component } from '@angular/core';
import { TaskSubmition } from 'src/app/Types/TaskSubmition.type';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'exc-after-sending-task-page',
  templateUrl: './after-sending-task-page.component.html',
  styleUrls: ['./after-sending-task-page.component.scss']
})
export class AfterSendingTaskPageComponent {
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
