import { Component } from '@angular/core';
import { Task } from './task-full-description.types';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { timeout } from 'rxjs/internal/operators';

@Component({
  selector: 'exc-task-full-descr-teacher',
  templateUrl: './task-full-descr-teacher.component.html',
  styleUrls: ['./task-full-descr-teacher.component.scss']
})
export class TaskFullDescrTeacherComponent {
  task: Task = {
    _id: '2n2n2',
    name: 'Название задачи',
    tags: ['тег', 'тег', 'тег'],
    description: 'Задана система дорог, определяемая набором пар городов. Каждая такая пара { i, j } указывает, ' +
    'что из города i можно проехать в город j и в обратном направлении. Необходимо определить, можно ли проехать из заданного ' +
    'города a в заданный город b таким образом, чтобы посетить город c, не проезжать ни по какой дороге более одного раза ' +
    'и не заезжать ни в какой город более одного раза.',
    weight: 10,
    inputFilesUrls: ['https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg',
      'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg',
      'https://sun9-4.userapi.com/c7001/v7001950/4b499/eAKxv9RVmrQ.jpg',
      'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg',
      'https://sun9-4.userapi.com/c7001/v7001950/4b499/eAKxv9RVmrQ.jpg',
    ],
    outputFilesUrls: ['https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg',
      'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg',
      'https://sun9-4.userapi.com/c7001/v7001950/4b499/eAKxv9RVmrQ.jpg',
      'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg',
      'https://sun9-4.userapi.com/c7001/v7001950/4b499/eAKxv9RVmrQ.jpg',
    ]
  };
  private deleteStatus: boolean;
  constructor(private activatedRoute: ActivatedRoute, private location: Location, public snackBar: MatSnackBar) {
    const id = this.activatedRoute.snapshot.params.id;
    console.log('id: ' + id);
    this.deleteStatus = true;
  }

  openSnackbar() {
    const argsArrayDeleted = ['Задача удалена', 'Отмена', { duration: 1500 }];
    const argsArrayNotDeleted = [ 'Задача не удалена', '', { duration: 1500 }];
    const snack = this.snackBar.open.apply(this.snackBar, this.deleteStatus ? argsArrayDeleted : argsArrayNotDeleted);
    if (this.deleteStatus) {
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

