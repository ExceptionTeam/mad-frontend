import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'exc-input-output-adding',
  templateUrl: './input-output-adding.component.html',
  styleUrls: ['./input-output-adding.component.scss']
})
export class InputOutputAddingComponent implements OnInit {
  @Input() files: File[] = [];
  validFile = false;
  @Output() fileChanged = new EventEmitter<File>();
  @Output() validFiles = new EventEmitter<boolean>();
  length: number[] = [];
  counter: number;
  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  onClick(event) {
    // console.log(this.files);
    this.length.push(++this.counter);
    this.length.push(++this.counter);
    this.files.length += 2;
    this.validFile = false;
    this.validFiles.emit(this.validFile);
  }

  onDelete(event, index) {
    // console.log(index);
    // console.log(this.files);
    this.files.splice(index - 1, 2);
    this.length.splice(index - 1, 2);
    // console.log(this.files);
    this.checkValid();
    // console.log(this.validFile);
  }

  onFileChanged(file, index) {
    this.files[index] = file;
    // console.log(this.files);
    this.checkValid();
    // console.log(this.validFile);
  }

  checkValid() {
    if (this.files.length - this.files.filter(function (x) {
      return typeof x !== 'undefined';
    }).length <= 0) {
      this.validFile = true;
    } else {
      this.validFile = false;
    }
    this.validFiles.emit(this.validFile);
  }
}
