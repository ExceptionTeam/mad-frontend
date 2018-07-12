import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface Task {
  name: string;
  file: string;
  tests: string;
  teacher: string;
  mark: number;
}

  export const tasks: Task[] = [
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Задача о кольцах', file: 'ring.java', tests: '10/15', teacher: 'Vasilkov D.D.', mark: 4},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Лолецкий', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
 ];

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(tasks);
}
}
