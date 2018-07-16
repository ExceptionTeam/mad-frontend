import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exc-file-uploading',
  templateUrl: './file-uploading.component.html',
  styleUrls: ['./file-uploading.component.scss']
})

export class FileUploadingComponent {
  @Output() fileChanged = new EventEmitter<File>();
  file: File;

  uploadFile(event) {
    this.file = event.target.files[0];
    this.fileChanged.emit(this.file);
  }
}
