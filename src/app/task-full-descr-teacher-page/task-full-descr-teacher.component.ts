import { Component } from '@angular/core';
import { Task } from '../task-full-descr-teacher/task-full-description.type';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TaskService } from '../task.service';

@Component({
  selector: 'exc-task-full-descr-teacher',
  templateUrl: './task-full-descr-teacher.component.html',
  styleUrls: ['./task-full-descr-teacher.component.scss']
})
export class TaskFullDescrTeacherComponent {
  task: Partial<Task>;
  id: string;
  role = 'teacher';

  constructor(private activatedRoute: ActivatedRoute,
              public snackBar: MatSnackBar,
              private taskService: TaskService,
              public router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.role === 'teacher') {
      this.taskService.getTeacherFullDescription(this.id).subscribe(task => this.task = task);
    } else {
      if (this.role === 'admin') {
        // запрос полн информации для админа
      }
    }
  }

  openSnackbar() {
    const argsArrayDeleted = ['Задача удалена', 'Отмена', { duration: 5000 }];
    const argsArrayNotDeleted = ['Задача не удалена', '', { duration: 5000 }];

    this.taskService.deleteTask(this.id).subscribe(isDeleted => {
      console.log('isDeleted: ', isDeleted);
      const snack = this.snackBar.open.apply(this.snackBar, argsArrayDeleted);
      snack.afterDismissed().subscribe(info => {
        if (info.dismissedByAction === true) {
          console.log('запрос на отмену удаления задачи');
          this.taskService.activateTask(this.id).subscribe();
          // this.router.navigate([`/task/table-teacher/${id}`]);
        }
      });
    }, error => {
      this.snackBar.open.apply(this.snackBar, argsArrayNotDeleted);
    });
  }
}

