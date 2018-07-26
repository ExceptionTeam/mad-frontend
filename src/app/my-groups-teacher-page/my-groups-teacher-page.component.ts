import { Component } from '@angular/core';
import { Student, Group } from 'src/app/Types/MyStudentsTeacher.type';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'exc-my-groups-teacher-page',
  templateUrl: './my-groups-teacher-page.component.html',
  styleUrls: ['./my-groups-teacher-page.component.scss']
})
export class MyGroupsTeacherPageComponent {
  indStudents: Student[] = [];
  groups: Group[] = [];

  constructor(private tasksService: TaskService) {
    this.tasksService.getStudentsAndGroups('5b520978359e36150c9335fb').
      subscribe(item => {
        this.indStudents = item.individualStudents;
        this.groups = item.groups;
        console.log(this.indStudents);
        console.log(this.groups);
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
