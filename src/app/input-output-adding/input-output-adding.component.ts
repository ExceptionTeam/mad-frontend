import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'exc-input-output-adding',
  templateUrl: './input-output-adding.component.html',
  styleUrls: ['./input-output-adding.component.scss']
})
export class InputOutputAddingComponent implements OnInit {
  files: File[] = [];
  length: number[] = [];
  counter: number;
  @Output() fileChanged = new EventEmitter<File>();
  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  onClick(event) {
    console.log(this.files);
    this.length.push(++this.counter);
    this.length.push(++this.counter);
  }

  onDelete(event, index) {
    console.log(index);
    console.log(this.files);
    this.files.splice(index - 1, 2);
    this.length.splice(index - 1, 2);
    console.log(this.files);
  }

  onFileChanged(file, index) {
    this.files[index] = file;
    console.log(this.files);
  }
}
