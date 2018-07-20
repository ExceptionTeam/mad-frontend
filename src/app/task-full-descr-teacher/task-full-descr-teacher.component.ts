import { Component } from '@angular/core';
import { Task } from './task-full-description.types';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'exc-task-full-descr-teacher',
  templateUrl: './task-full-descr-teacher.component.html',
  styleUrls: ['./task-full-descr-teacher.component.scss']
})
export class TaskFullDescrTeacherComponent {
  task: Task = {
    _id: this.activatedRoute.snapshot.params.id,
    name: 'Название задачи',
    tags: ['тег', 'тег', 'тег'],
    description: 'Задана система дорог, определяемая набором пар городов. Каждая такая пара { i, j } указывает, ' +
    'что из города i можно проехать в город j и в обратном направлении. Необходимо определить, можно ли проехать из заданного ' +
    'города a в заданный город b таким образом, чтобы посетить город c, не проезжать ни по какой дороге более одного раза ' +
    'и не заезжать ни в какой город более одного раза.',
    weight: 10,
    inputFilesUrls: [{ link: 'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg', name: 'input1.txt' },
      { link: 'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg', name: 'input2.txt' },
      { link: 'https://sun9-4.userapi.com/c7001/v7001950/4b499/eAKxv9RVmrQ.jpg', name: 'input3.txt' },
      { link: 'https://sun9-4.userapi.com/c7001/v7001950/4b499/eAKxv9RVmrQ.jpg', name: 'input4.txt' },
      { link: 'https://sun9-4.userapi.com/c7001/v7001950/4b499/eAKxv9RVmrQ.jpg', name: 'input5.txt' },
    ],
    outputFilesUrls: [{ link: 'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg', name: 'ouput1.txt' },
      { link: 'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg', name: 'output2.txt' },
      { link: 'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg', name: 'output3.txt' },
      { link: 'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg', name: 'output4.txt' },
      { link: 'https://pp.userapi.com/c845523/v845523795/91587/8MVvxQHQ8yA.jpg', name: 'output5.txt' },
    ],
    additAbility: true
  };

  constructor(private activatedRoute: ActivatedRoute, private location: Location, public snackBar: MatSnackBar) {
    const id = this.activatedRoute.snapshot.params.id;
    console.log('id: ' + id);
  }

  openSnackbar() {
    this.snackBar.open('Задача удалена', 'Отмена');
    this.location.back();
  }
}

