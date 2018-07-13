import { Component, OnInit } from '@angular/core';
export interface TestFile {
   input: File;
   output: File;
}
@Component({
  selector: 'exc-task-creation-page',
  templateUrl: './task-creation-page.component.html',
  styleUrls: ['./task-creation-page.component.scss']
})
export class TaskCreationPageComponent implements OnInit {
  testFiles: TestFile[];
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    // this.testFiles.push();
      //  console.log(this.testFiles.length);
  }
}
