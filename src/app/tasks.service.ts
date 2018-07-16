import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

export interface Task {
  name: string;
  file: string;
  tests: string;
  teacher: string;
  mark: number;
}

  export const tasks: Task[] = [
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'lol', mark: 9},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'lol', mark: 9},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Задача о кольцах', file: 'ring.java', tests: '10/15', teacher: 'Vasilkov D.D.', mark: 4},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Скрудж Макдак', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Кратчайший путь', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Кратчайший путь', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
  {name: 'Кратчайший путь', file: 'main.java', tests: '15/15', teacher: 'Vasilkov D.D.', mark: 7},
 ];

@Injectable({
  providedIn: 'root'
})
export class TasksService {

   constructor() { }

  getTasks(startIndex, pageSize): Observable<Task[]> {
    return of (tasks.slice(startIndex, pageSize));
  }
  getLength(): number {
    return tasks.length;
  }

}
