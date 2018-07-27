import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { Task } from '../allTasksStudent.service';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'exc-tasks-student-page',
  templateUrl: './tasks-student-page.component.html',
  styleUrls: ['./tasks-student-page.component.scss']
})
export class TasksStudentPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'weight', 'file', 'tests', 'teacher', 'mark'];
  dataSource: UserDataSource | null;

  constructor(private taskService: TaskService) {}

  countTrueSolutions(arr: boolean[]) {
    let count = 0;
    arr.forEach(function(element) {
      if (element === true) {
        count++;
      }
    });
    return count;
  }

  countAllSolutions(arr: boolean[]) {
    return arr.length;
  }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.taskService);
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private taskService: TaskService) {
    super();
    this.taskService.getStudentTasks('5b445f245994e12e04b32e43');
  }

  connect(): Observable<Task[]> {
    return this.taskService.studentTasks$.pipe(tap(console.log));
  }

  disconnect() {}
}
