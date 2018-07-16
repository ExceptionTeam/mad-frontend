import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'exc-file-uploading',
  templateUrl: './file-uploading.component.html',
  styleUrls: ['./file-uploading.component.scss']
})
export class FileUploadingComponent implements OnInit {
  @Output() fileChanged = new EventEmitter<File>();
  file: File;
  @Input() id: number;
  constructor() {
    this.id = 0;
  }
  ngOnInit() {
  }

  uploadFile(event) {
    this.file = event.target.files[0];
    this.fileChanged.emit(this.file);
    event.target.value = null;
  }
}

