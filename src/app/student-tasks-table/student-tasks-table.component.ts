import { Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Task} from '../tasks.service';
import {TasksService} from '../tasks.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'exc-student-tasks-table',
  templateUrl: './student-tasks-table.component.html',
  styleUrls: ['./student-tasks-table.component.scss']
})
export class StudentTasksTableComponent implements OnInit {

  dataSource = new UserDataSource (this.tasksService);
  displayedColumns: string[] = ['name', 'file', 'tests', 'teacher', 'mark'];
  constructor(private tasksService: TasksService) {}

  ngOnInit() {}

}

export class UserDataSource extends DataSource<any> {
  constructor(private tasksService: TasksService) {
    super();
  }
  connect(): Observable<Task[]> {
    return this.tasksService.getTasks();
  }
  disconnect() {}
}
