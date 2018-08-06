import { Component } from '@angular/core';
import { TaskFullInfo } from '../Types/TaskFullInfo.type';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-task-full-descr-teacher',
  templateUrl: './task-full-descr-teacher.component.html',
  styleUrls: ['./task-full-descr-teacher.component.scss']
})
export class TaskFullDescrTeacherComponent {
  task: Partial<TaskFullInfo>;
  id: string;
  role: string;

  constructor(private activatedRoute: ActivatedRoute,
              public snackBar: MatSnackBar,
              private taskService: TaskService,
              public router: Router,
              private userService: UserService) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.userService.getInfo().subscribe(
      (user) => {
        this.role = user.role;
        if (this.role === 'TEACHER') {
          this.taskService.getTaskFullInfoTeacher(this.id).subscribe(task => this.task = task);
        } else {
          this.taskService.getTaskFullInfoAdmin(this.id).subscribe(task => this.task = task);
        }
      },
      error => {
        this.role = '';
      });
  }

  deleteTask() {
    const argsArrayDeleted = ['Задача удалена', 'Отмена', { duration: 5000 }];
    const argsArrayNotDeleted = ['Задача не удалена', '', { duration: 5000 }];

    this.taskService.deleteTask(this.id).subscribe(isDeleted => {
      console.log('isDeleted: ', isDeleted);
      this.router.navigate([`/task/table-teacher`]);
      const snack = this.snackBar.open.apply(this.snackBar, argsArrayDeleted);
      snack.afterDismissed().subscribe(info => {
        if (info.dismissedByAction === true) {
          console.log('запрос на отмену удаления задачи');
          this.taskService.activateTask(this.id).subscribe(() => this.taskService.loadTasks(this.role));
        }
      });
    }, error => {
      this.snackBar.open.apply(this.snackBar, argsArrayNotDeleted);
    });
  }

  activateTask() {
    this.taskService.activateTask(this.id).subscribe();
    const snack = this.snackBar.open.apply(this.snackBar, ['Задача восстановлена', '', { duration: 5000 }]);
  }

  isAdmin() {
    return this.role === 'ADMIN';
  }
}

