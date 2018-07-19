import { Component } from '@angular/core';
import { Task } from './task-full-description.types';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params.id;
    console.log('id: ' + id);
  }

}

