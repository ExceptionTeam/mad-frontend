import { Component } from '@angular/core';

export interface TaskId {
  name: string;
  description: string;
  weight: Number;
}

export interface TeacherId {
  name: string;
  surname: string;
}

export interface Task {
  assId: string;
  taskId: TaskId;
  deadline: Date;
  teacherId: TeacherId;
}

@Component({
  selector: 'exc-task-view-sending',
  templateUrl: './task-view-sending.component.html',
  styleUrls: ['./task-view-sending.component.scss']
})
export class TaskViewSendingComponent {
  task: Task = {
    assId: '123d',
    taskId: {
      name: 'Название задачи',
      description: 'Чёрный ящик организован наподобие примитивной базы данных. Он может хранить набор целых чисел и имеет' +
      'выделенную переменную i. В начальный момент времени чёрный ящик пуст, а значение переменной i равно нулю. Чёрный ящик' +
      ' обрабатывает последовательность поступающих команд (запросов).',
      weight: 10
    },
    deadline: new Date(),
    teacherId: {
      name: 'Ж В',
      surname: 'Василенко',
    }
  };
}
