import { Component, OnInit } from '@angular/core';
import { Task } from '../types/Task';

@Component({
  selector: 'exc-all-tasks-teacher',
  templateUrl: './all-tasks-teacher.component.html',
  styleUrls: ['./all-tasks-teacher.component.scss']
})
export class AllTasksTeacherComponent implements OnInit {
  tasks: Task[] = [
    { _id: '32748h983', name: 'Триангуляция', tags: ['рек', 'тег', 'тег'], description: 'жыдфвавлаожфыа', weight: 9 },
    { _id: '32748h983', name: 'Выбрать поднабор', tags: ['рек', 'тег', 'тег'], description: 'жыдфывавлаожфыа', weight: 10 },
    { _id: '32748h983', name: 'Бинарные последовательности', tags: ['рек', 'тег', 'тег'], description: 'жыдфвавлаожфыа', weight: 10 },
    { _id: '32748h983', name: 'Пробирки', tags: ['рек', 'тег', 'тег'], description: 'жыдвфвыалаожфыа', weight: 6 },
    { _id: '32748h983', name: 'Игра', tags: ['рек', 'тег', 'тег'], description: 'жыдвфывалаожфыа', weight: 10 },
    { _id: '32748h983', name: 'Полигон', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 4 },
    { _id: '32748h983', name: 'Эпидемия', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
    { _id: '32748h983', name: 'Торговые скидки', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
    { _id: '32748h983', name: 'Больше не запишешь', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 3 },
    { _id: '32748h983', name: 'Блок из единиц', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
    { _id: '32748h983', name: 'Блок из единиц', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 2 }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
