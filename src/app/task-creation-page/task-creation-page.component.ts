import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'exc-task-creation-page',
  templateUrl: './task-creation-page.component.html',
  styleUrls: ['./task-creation-page.component.scss']
})
export class TaskCreationPageComponent implements OnInit {
  name: String;
  description: String;
  InputOutputFiles: File[] = [];
  @Input() validFiles = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value.name);
    console.log(value.description);
    console.log(this.InputOutputFiles);
  }

  changeValidState(event) {
    // console.log(event);
    this.validFiles = event;
  }
}
