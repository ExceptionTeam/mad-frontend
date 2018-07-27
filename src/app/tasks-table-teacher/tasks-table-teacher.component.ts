import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator } from '@angular/material';
import { TaskAssigningWindowComponent } from '../task-assigning-window/task-assigning-window.component';
import { Task } from '../Types/TeacherTasks.type';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/task.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'exc-tasks-table-teacher',
  templateUrl: './tasks-table-teacher.component.html',
  styleUrls: ['./tasks-table-teacher.component.scss']
})
export class TasksTableTeacherComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'weight', 'appoint'];
  dataSource: UserDataSource | null;

  constructor(public dialog: MatDialog,
    private taskService: TaskService
  ) {
  }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.taskService);
  }

  public changePaginationParams() {
    this.taskService.paginationParams.pageIndex = this.paginator.pageIndex;
    this.taskService.paginationParams.pageSize = this.paginator.pageSize;
    this.taskService.loadTasks();
  }

  public getPaginationParams() {
    return this.taskService.paginationParams;
  }

  public openModal(id) {
    this.dialog.open(TaskAssigningWindowComponent, {
      data: {
        _id: id
      }
    });
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(
    private taskService: TaskService
  ) {
    super();
    this.taskService.loadTasks();
  }

  connect(): Observable<Task[]> {
    return this.taskService.bSubject$.pipe(tap(console.log));
  }

  disconnect() {
  }
}

