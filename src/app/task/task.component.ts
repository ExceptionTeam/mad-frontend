import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
export interface Task {
  info: string;
  type: number;
  answers: string[];
  rightAnswer: string;
  personAnswer: string;
}
