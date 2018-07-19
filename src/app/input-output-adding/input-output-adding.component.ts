import { Component, Output, EventEmitter, Input } from '@angular/core';
import { InputOutputFiles } from 'src/app/Types/InputOutputFiles.type';

@Component({
  selector: 'exc-input-output-adding',
  templateUrl: './input-output-adding.component.html',
  styleUrls: ['./input-output-adding.component.scss']
})
export class InputOutputAddingComponent {
  @Input() editFiles = [];
  @Output() fileChanged = new EventEmitter<InputOutputFiles[]>();
  @Output() validFiles = new EventEmitter<boolean>();
  @Output() editFilesChanged = new EventEmitter<string[]>();
  files: InputOutputFiles [] = [] ;
  validFile = false;
  counter = 0;
  in = 'input';
  out = 'output';

  constructor() {
    this.counter = 0;
  }

  onClick(event) {
    this.files.push({input: null, output: null});
    this.validFile = false;
    this.validFiles.emit(this.validFile);
  }

  onDelete(event, index) {
    this.files.splice(index - 1, 1);
    this.fileChanged.emit(this.files);
    this.checkValid();
  }

  onDeleteEdit(event, index) {
    this.editFiles.splice(index - 1, 1);
    this.editFilesChanged.emit(this.editFiles);
  }

  onFileChanged(file, index, types) {
    if (types === 'input') {
      this.files[index].input = file;
    } else {
      this.files[index].output = file;
    }
    this.fileChanged.emit(this.files);
    this.checkValid();
  }

  checkValid() {
    console.log(this.files);
    if (this.files.length - this.files.filter(function (x) {
      return x.input !== null && x.output !== null;
    }).length <= 0)  {
      this.validFile = true;
    } else {
      this.validFile = false;
    }
    this.validFiles.emit(this.validFile);
  }
}
