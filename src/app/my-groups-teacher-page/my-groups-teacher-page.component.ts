import { Component } from '@angular/core';
import { Group } from 'src/app/Types/MyStudentsTeacher.type';
import { TaskService } from 'src/app/task.service';
import { UserService } from 'src/app/user.service';
import { UserId } from 'src/app/Types/UserId.type';
import { AddGroupWindowComponent } from '../add-group-window/add-group-window.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'exc-my-groups-teacher-page',
  templateUrl: './my-groups-teacher-page.component.html',
  styleUrls: ['./my-groups-teacher-page.component.scss']
})
export class MyGroupsTeacherPageComponent {
  indStudents: UserId[] = [];
  groups: Group[] = [];

  constructor(private tasksService: TaskService,
              private userService: UserService,
              public dialog: MatDialog) {
    userService.getInfo().subscribe(user => {
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

  addGroup() {
    this.dialog.open(AddGroupWindowComponent, {});
  }

  editClick(event) {
    event.stopPropagation();
  }

  deleteClick(event) {
    event.stopPropagation();
  }

}
