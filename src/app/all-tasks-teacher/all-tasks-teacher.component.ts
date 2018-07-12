import { Component, OnInit } from '@angular/core';

export interface TASK {
  _id: number;
  name: string;
  tags: string[];
  description: string;
  weight: number;
}

@Component({
  selector: 'exc-all-tasks-teacher',
  templateUrl: './all-tasks-teacher.component.html',
  styleUrls: ['./all-tasks-teacher.component.scss']
})
export class AllTasksTeacherComponent implements OnInit {
  tasks: TASK[] = [
    { _id: 0, name: 'Триангуляция', tags: ['рек', 'тег', 'тег'], description: 'жыдфвавлаожфыа', weight: 9 },
    { _id: 12, name: 'Выбрать поднабор', tags: ['рек', 'тег', 'тег'], description: 'жыдфывавлаожфыа', weight: 10 },
    { _id: 4, name: 'Бинарные последовательности', tags: ['рек', 'тег', 'тег'], description: 'жыдфвавлаожфыа', weight: 10 },
    { _id: 132, name: 'Пробирки', tags: ['рек', 'тег', 'тег'], description: 'жыдвфвыалаожфыа', weight: 6 },
    { _id: 152, name: 'Игра', tags: ['рек', 'тег', 'тег'], description: 'жыдвфывалаожфыа', weight: 10 },
    { _id: 23, name: 'Полигон', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 4 },
    { _id: 123, name: 'Эпидемия', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
    { _id: 123, name: 'Торговые скидки', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
    { _id: 123, name: 'Больше не запишешь', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 3 },
    { _id: 123, name: 'Блок из единиц', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
    { _id: 123, name: 'Блок из единиц', tags: ['рек', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 2 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
