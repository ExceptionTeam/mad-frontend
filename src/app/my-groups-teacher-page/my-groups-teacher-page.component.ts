import { Component } from '@angular/core';
import { Group, Student } from 'src/app/Types/MyStudentsTeacher.type';
import { TaskService } from 'src/app/task.service';
import { UserService } from 'src/app/user.service';
import { UserId } from 'src/app/Types/UserId.type';

@Component({
  selector: 'exc-my-groups-teacher-page',
  templateUrl: './my-groups-teacher-page.component.html',
  styleUrls: ['./my-groups-teacher-page.component.scss']
})
export class MyGroupsTeacherPageComponent {
  indStudents: UserId[] = [];
  groups: Group[] = [];

  constructor(private tasksService: TaskService, private userService: UserService) {
    userService.getInfo().subscribe(user => {
        console.log(user.id);
        this.tasksService.getStudentsAndGroups(user.id).subscribe(item => {
            this.indStudents = item.individualStudents;
            this.groups = item.groups;
            console.log(this.indStudents);
            console.log(this.groups);
          }
        );
      }
    );
  }

  editClick(event) {
    event.stopPropagation();
  }

  deleteClick(event) {
    event.stopPropagation();
  }

}
