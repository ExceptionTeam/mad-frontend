import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
  _id: string;
  name: string;
  weight: number;
}

const tasks: Task[] = [
  { _id: '5b48a324c051c519f8477f85', name: 'Триангуляция', weight: 9 },
  { _id: '5b48a324c051c519f8477f85', name: 'Выбрать поднабор', weight: 10 },
  { _id: '5b48b626adfc5f0fd84d62dd', name: 'Бинарные последовательности', weight: 10 },
  { _id: '5b48b626adfc5f0fd84d62dd', name: 'Пробирки', weight: 6 },
  { _id: '5b48b626adfc5f0fd84d62dd', name: 'Игра', weight: 10 },
  { _id: 'poligon', name: 'Полигон', weight: 4 },
  { _id: 'fff', name: 'Эпидемия', weight: 10 },
  { _id: 'sd', name: 'Торговые скидки', weight: 10 },
  { _id: '32748h983', name: 'Больше не запишешь', weight: 3 },
  { _id: '32748h983', name: 'Блок из единиц', weight: 10 },
  { _id: '32748h983', name: 'Блок из единиц', weight: 2 },
  { _id: '32748h983', name: 'Триангуляция', weight: 9 },
  { _id: '32748h983', name: 'Триангуляция', weight: 9 }
];

@Injectable({
  providedIn: 'root'
})
export class AllTasksTeacherService {
  constructor() {
  }

  getTasks(startIndex, pageSize): Observable<Task[]> {
    return of(tasks.slice(startIndex, pageSize));
  }

  getLength(): number {
    return tasks.length;
  }
}
