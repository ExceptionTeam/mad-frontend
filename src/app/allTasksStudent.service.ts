import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
  _id: string;
  name: string;
  tests: string;
  teacher: string;
  mark: number;
}

export const tasks: Task[] = [
  { _id: '5b4e0549b1900619b486a5aa', name: 'Скрудж Макдак', tests: '15/15', teacher: 'lol', mark: 9 },
  { _id: '5b4e0549b1900619b486a5aa', name: 'Скрудж Макдак', tests: '15/15', teacher: 'lol', mark: 9 },
  { _id: '5b4e0549b1900619b486a5aa', name: 'Скрудж Макдак', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Скрудж Макдак', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Скрудж Макдак', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Задача о кольцах', tests: '10/15', teacher: 'Vasilkov D.D.', mark: 4 },
  { _id: 'sdf', name: 'Скрудж Макдак', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Скрудж Макдак', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Скрудж Макдак', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Скрудж Макдак', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Кратчайший путь', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Кратчайший путь', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
  { _id: 'sdf', name: 'Кратчайший путь', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7 },
];

@Injectable({
  providedIn: 'root'
})
export class AllTasksStudentService {
  constructor() {
  }

  getTasks(startIndex, pageSize): Observable<Task[]> {
    return of(tasks.slice(startIndex, pageSize));
  }

  getLength(): number {
    return tasks.length;
  }
}
