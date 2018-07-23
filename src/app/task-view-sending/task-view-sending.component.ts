import { Component, Input } from '@angular/core';
import { TaskFullDStudent } from '../task-sending-page/task-sending-page.type';

@Component({
  selector: 'exc-task-view-sending',
  templateUrl: './task-view-sending.component.html',
  styleUrls: ['./task-view-sending.component.scss']
})
export class TaskViewSendingComponent {
  @Input() task: TaskFullDStudent;

  constructor() {
  }

  /*task: TaskFullDStudent = {
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
  };*/
}
