import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-tasks-teacher-page',
  templateUrl: './tasks-teacher-page.component.html',
  styleUrls: ['./tasks-teacher-page.component.scss']
})
export class TasksTeacherPageComponent implements OnInit {
  // role: string;

  constructor(private taskService: TaskService,
              public userService: UserService) {
    // this.role = 'teacher';
  }

  onSearch(query: string) {
    this.taskService.searchParams.query = query.toLowerCase().split(' ');
    this.taskService.searchParams.paging.pageIndex = 0;
    this.taskService.loadTasks(this.userService.role);
  }

  getRole() {
    return this.userService.role;
  }

  ngOnInit() {
  }
}
