import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'exc-file-uploading',
  templateUrl: './file-uploading.component.html',
  styleUrls: ['./file-uploading.component.scss']
})
export class FileUploadingComponent {
  @Output() fileChanged = new EventEmitter<File>();
  @Input() id: number;
  file: File;
  constructor() {
    this.id = 0;
  }

  uploadFile(event) {
    this.file = event.target.files[0];
    this.fileChanged.emit(this.file);
    event.target.value = null;
  }
}

