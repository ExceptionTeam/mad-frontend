import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'exc-file-uploading',
  templateUrl: './file-uploading.component.html',
  styleUrls: ['./file-uploading.component.scss']
})
export class FileUploadingComponent {
  @Input() id;
  @Input() type;
  @Input() deadline;
  @Output() fileChanged = new EventEmitter<File>();
  file: File;
  now: number;

  constructor() {
    this.id = 0;
    this.now = new Date().getTime();
  }

  uploadFile(event) {
    this.file = event.target.files[0];
    this.fileChanged.emit(this.file);
    event.target.value = null;
  }

  isDisable() {
    const deadlineNum = new Date(this.deadline).getTime();
    console.log(this.now - this.deadline);
    return this.now - deadlineNum > 0;
  }
}
