import { Component } from '@angular/core';

export interface Task {
  assId: string;
  name: string;
  description: string;
  deadline: Date;
  teacherName: string;
  teacherSurname: string;
  weight: number;
}

@Component({
  selector: 'exc-task-view-sending',
  templateUrl: './task-view-sending.component.html',
  styleUrls: ['./task-view-sending.component.scss']
})
export class TaskViewSendingComponent {
  task: Task = {
    assId: '1',
    name: 'Задача',
    description: 'аннвагагваноенго гаганганоагааа агага оаеагааннвагагваноен еанвар апго гаганганоагааа агага оагааа',
    deadline: new Date(),
    teacherName: 'ЖВ',
    teacherSurname: 'Василенко',
    weight: 4
  };
}
