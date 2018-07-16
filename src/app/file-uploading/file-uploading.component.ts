import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exc-file-uploading',
  templateUrl: './file-uploading.component.html',
  styleUrls: ['./file-uploading.component.scss']
})

export class FileUploadingComponent implements OnInit {
  @Output() fileChanged = new EventEmitter<File>();
  file: File;

  ngOnInit() {
  }

  uploadFile(event) {
    this.file = event.target.files[0];
    this.fileChanged.emit(this.file);
    console.log(event.target.closest('exc-file-uploading').id);
  }
}
