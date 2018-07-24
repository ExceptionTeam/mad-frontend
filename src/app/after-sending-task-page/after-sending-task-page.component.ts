import { Component } from '@angular/core';
import { TaskSolvingInfo } from 'src/app/Types/TaskSolvingInfo.type';
import { ActivatedRoute } from '@angular/router';
import { TasksTeacherService } from 'src/app/tasks.service';

@Component({
  selector: 'exc-after-sending-task-page',
  templateUrl: './after-sending-task-page.component.html',
  styleUrls: ['./after-sending-task-page.component.scss']
})
export class AfterSendingTaskPageComponent {
  taskName = 'Название Задачи';
  files: TaskSolvingInfo[] = [];
  passedTests: number[] = [];
  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksTeacherService) {
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
