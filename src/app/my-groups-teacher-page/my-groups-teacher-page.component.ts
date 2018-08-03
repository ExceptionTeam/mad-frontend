import { Component } from '@angular/core';
import { Student, Group } from 'src/app/Types/MyStudentsTeacher.type';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TaskService } from 'src/app/task.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'exc-my-groups-teacher-page',
  templateUrl: './my-groups-teacher-page.component.html',
  styleUrls: ['./my-groups-teacher-page.component.scss']
})
export class MyGroupsTeacherPageComponent {
  indStudents: Student[] = [];
  groups: Group[] = [];

  constructor(private tasksService: TaskService, private userService: UserService) {
    userService.getInfo().subscribe(user => {
      console.log(user.id);
      this.tasksService.getStudentsAndGroups(user.id).
        subscribe(item => {
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
