import { Component } from '@angular/core';
import { Group } from 'src/app/Types/MyStudentsTeacher.type';
import { UserService } from 'src/app/user.service';
import { UserId } from 'src/app/Types/UserId.type';
import { AddGroupWindowComponent } from '../add-group-window/add-group-window.component';
import { MatDialog } from '@angular/material';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'exc-my-groups-teacher-page',
  templateUrl: './my-groups-teacher-page.component.html',
  styleUrls: ['./my-groups-teacher-page.component.scss']
})
export class MyGroupsTeacherPageComponent {
  indStudents: UserId[] = [];
  groups: Group[] = [];

  constructor(private userService: UserService,
              public dialog: MatDialog,
              private groupService: GroupsService) {
    userService.getInfo().subscribe(user => {
        this.groupService.getStudentsAndGroups(user.id).subscribe(item => {
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
    const dialogRef = this.dialog.open(AddGroupWindowComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.groupService.getStudentsAndGroups(this.userService.id).subscribe(item => {
          this.indStudents = item.individualStudents;
          this.groups = item.groups;
        }
      );
    });
  }

  editClick(event) {
    event.stopPropagation();
  }

  deleteClick(event) {
    event.stopPropagation();
  }

}
