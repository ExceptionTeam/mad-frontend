import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  constructor() { }
  task: Task = {name: 'Задача', description: 'аннвагагваноен еанвар апго гаганганоагааа агага оаеага',
   deadline: new Date(), teacher: 'Василенко'};
  rows: [2 , 2, 1, 1];
  ngOnInit() {
  }
}
export interface Task {
  name: string;
  description: string;
  deadline: Date;
  teacher: string;
}
