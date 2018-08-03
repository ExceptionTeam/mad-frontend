import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';
import { StudentTask } from '../Types/StudentTasks.type';

@Component({
  selector: 'exc-tasks-student-page',
  templateUrl: './tasks-student-page.component.html',
  styleUrls: ['./tasks-student-page.component.scss']
})
export class TasksStudentPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'file', 'tests', 'teacher', 'mark'];
  dataSource: StudentTask[];

  constructor(private taskService: TaskService,
              private userService: UserService) {
  }

  getData() {
    if (typeof this.dataSource === 'undefined') {
      this.taskService.getStudentTasks(this.userService.id).subscribe(array => {
        this.dataSource = array;
      });
     return this.dataSource;
    }
     return this.dataSource;
  }

  countTrueSolutions(arr: boolean[]) {
    let count = 0;
    arr.forEach(function (element) {
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
  }
}
