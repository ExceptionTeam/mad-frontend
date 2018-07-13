import { Component, OnInit } from '@angular/core';

export interface Task {
  id: string;
  name: string;
  description: string;
  deadline: Date;
  teacher: string;
  mark: number;
}

@Component({
  selector: 'exc-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  task: Task = {
    id: '1',
    name: 'Задача',
    description: 'аннвагагваноенго гаганганоагааа агага оаеагааннвагагваноен еанвар апго гаганганоагааа агага оагааа',
    deadline: new Date(),
    teacher: 'Василенко', mark: 4
  };

  ngOnInit() {
  }
}
