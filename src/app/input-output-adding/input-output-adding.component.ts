import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'exc-input-output-adding',
  templateUrl: './input-output-adding.component.html',
  styleUrls: ['./input-output-adding.component.scss']
})
export class InputOutputAddingComponent {
  @Input() files: File[] = [];
  @Output() fileChanged = new EventEmitter<File>();
  @Output() validFiles = new EventEmitter<boolean>();
  validFile = false;
  length: number[] = [];
  counter: number;

  constructor() {
    this.counter = 0;
  }

  onClick(event) {
    this.length.push(++this.counter);
    this.length.push(++this.counter);
    this.files.length += 2;
    this.validFile = false;
    this.validFiles.emit(this.validFile);
  }

  onDelete(event, index) {
    this.files.splice(index - 1, 2);
    this.length.splice(index - 1, 2);
    this.checkValid();
  }

  onFileChanged(file, index) {
    this.files[index] = file;
    this.checkValid();
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
