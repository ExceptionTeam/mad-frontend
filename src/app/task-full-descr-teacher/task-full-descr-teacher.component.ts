import { Component } from '@angular/core';
import { Task } from './task-full-description.type';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'exc-task-full-descr-teacher',
  templateUrl: './task-full-descr-teacher.component.html',
  styleUrls: ['./task-full-descr-teacher.component.scss']
})
export class TaskFullDescrTeacherComponent {
  task: Partial<Task>;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              public snackBar: MatSnackBar,
              private taskService: TaskService) {
    const id = this.activatedRoute.snapshot.params.id;
    this.taskService.getTeacherFullDescription(id).subscribe(task => this.task = task);
  }

  openSnackbar() {
    const argsArrayDeleted = ['Задача удалена', 'Отмена', { duration: 3000 }];
    const argsArrayNotDeleted = ['Задача не удалена', '', { duration: 3000 }];
    const snack = this.snackBar.open.apply(this.snackBar, this.task.additAbility ? argsArrayDeleted : argsArrayNotDeleted);
    if (this.task.additAbility) {
      snack.afterDismissed().subscribe(info => {
        if (info.dismissedByAction === true) {
          console.log('запрос на отмену удаления задачи');
        } else {
          console.log('все ок');
        }
      });
      this.location.back();
    }
  }
}

