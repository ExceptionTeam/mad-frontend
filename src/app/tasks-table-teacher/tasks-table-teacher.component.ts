import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator } from '@angular/material';
import { TaskAssigningWindowComponent } from '../task-assigning-window/task-assigning-window.component';
import { Task } from '../Types/TeacherTasks.type';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/task.service';
import { tap } from 'rxjs/operators';
import { UserService } from '../user.service';

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
              private taskService: TaskService,
              public userService: UserService) {
    if (typeof this.userService.role === 'undefined') {
      this.userService.getInfo().subscribe(user => {
        if (user.role === 'ADMIN') {
          this.displayedColumns.splice(2, 0, 'status');
        }
        this.dataSource = new UserDataSource(this.taskService, user.role);
      });
    } else {
      if (this.userService.role === 'ADMIN') {
        this.displayedColumns.splice(2, 0, 'status');
      }
      this.dataSource = new UserDataSource(this.taskService, this.userService.role);
    }
  }

  ngOnInit() {
  }

  public changePaginationParams() {
    this.taskService.paginationParams.pageIndex = this.paginator.pageIndex;
    this.taskService.paginationParams.pageSize = this.paginator.pageSize;
    this.taskService.loadTasks(this.userService.role);
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
    private taskService: TaskService,
    private role: string
  ) {
    super();
    this.taskService.loadTasks(this.role);
  }

  connect(): Observable<Task[]> {
    return this.taskService.bSubject$.pipe(tap(console.log));
  }

  disconnect() {
  }
}

