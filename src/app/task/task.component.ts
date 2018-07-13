import { Component, OnInit } from '@angular/core';

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
  selector: 'exc-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  task: Task = {
    assId: '1',
    name: 'Задача',
    description: 'аннвагагваноенго гаганганоагааа агага оаеагааннвагагваноен еанвар апго гаганганоагааа агага оагааа',
    deadline: new Date(),
    teacherName: 'ЖВ',
    teacherSurname: 'Василенко',
    weight: 4
  };

  ngOnInit() {
  }
}
