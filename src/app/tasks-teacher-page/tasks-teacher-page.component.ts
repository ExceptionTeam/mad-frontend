import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'exc-tasks-teacher-page',
  templateUrl: './tasks-teacher-page.component.html',
  styleUrls: ['./tasks-teacher-page.component.scss']
})
export class TasksTeacherPageComponent implements OnInit {
  constructor(private taskService: TaskService) {
  }

  onSearch(query: string) {
    this.taskService.searchParams.query = query.toLowerCase().split(' ');
    this.taskService.searchParams.paging.pageIndex = 0;
    this.taskService.loadTasks();
  }

  ngOnInit() {
  }
}
