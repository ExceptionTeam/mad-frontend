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
    this.userService.getInfo().subscribe(
      (user) => {
        this.taskService.getStudentTasks(user.id).subscribe(array => {
          this.dataSource = array;
        });
      },
    );
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
