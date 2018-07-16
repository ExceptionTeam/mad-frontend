import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
  _id: string;
  name: string;
  tags: string[];
  description: string;
  weight: number;
}

const tasks: Task[] = [
  { _id: '32748h983', name: 'Триангуляция', tags: ['тег', 'тег', 'тег'], description: 'жыдфвавлаожфыа', weight: 9 },
  { _id: '32748h983', name: 'Выбрать поднабор', tags: ['тег', 'тег', 'тег'], description: 'жыдфывавлаожфыа', weight: 10 },
  { _id: '32748h983', name: 'Бинарные последовательности', tags: ['тег', 'тег', 'тег'], description: 'жыдфвавлаожфыа', weight: 10 },
  { _id: '32748h983', name: 'Пробирки', tags: ['тег', 'тег', 'тег'], description: 'жыдвфвыалаожфыа', weight: 6 },
  { _id: '32748h983', name: 'Игра', tags: ['тег', 'тег', 'тег'], description: 'жыдвфывалаожфыа', weight: 10 },
  { _id: '32748h983', name: 'Полигон', tags: ['тег', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 4 },
  { _id: '32748h983', name: 'Эпидемия', tags: ['тег', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
  { _id: '32748h983', name: 'Торговые скидки', tags: ['тег', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
  { _id: '32748h983', name: 'Больше не запишешь', tags: ['тег', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 3 },
  { _id: '32748h983', name: 'Блок из единиц', tags: ['тег', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 10 },
  { _id: '32748h983', name: 'Блок из единиц', tags: ['тег', 'тег', 'тег'], description: 'жыдвлаожфыа', weight: 2 },
  { _id: '32748h983', name: 'Триангуляция', tags: ['тег', 'тег', 'тег'], description: 'жыдфвавлаожфыа', weight: 9 },
  { _id: '32748h983', name: 'Триангуляция', tags: ['тег', 'тег', 'тег'], description: 'жыдфвавлаожфыа', weight: 9 }
];

@Injectable({
  providedIn: 'root'
})
export class AllTasksService {
  constructor() {}

  getTasks(startIndex, pageSize): Observable<Task[]> {
    return of(tasks.slice(startIndex, pageSize));
  }

  getLength(): number {
    return tasks.length;
  }
}