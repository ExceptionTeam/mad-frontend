import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface TestFile {
  input: File;
  output: File;
}

@Component({
  selector: 'exc-input-output-adding',
  templateUrl: './input-output-adding.component.html',
  styleUrls: ['./input-output-adding.component.scss']
})
export class InputOutputAddingComponent implements OnInit {
  inputFiles: File[] = [];
  outputFiles: File[] = [];
  length: number[] = [];
  @Output() inputFileChanged = new EventEmitter<File>();
  @Output() outputFileChanged = new EventEmitter<File>();
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(this.inputFiles);
    console.log(this.outputFiles);
    this.length.push(1);
  }

  onInputFileChanged(file, index) {
    if (this.inputFiles.length <= index) {
    this.inputFiles.push(file);
    } else {
       this.inputFiles[index] = file;
    }
  }

  onOutputFileChanged(file) {
    this.outputFiles.push(file);
  }
}
