import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'exc-file-apploading',
  templateUrl: './file-apploading.component.html',
  styleUrls: ['./file-apploading.component.scss']
})

export class FileApploadingComponent implements OnInit {
  @Output() fileChanged = new EventEmitter<File>();
  file: File;

  ngOnInit() {
  }

  aploadFile(event) {
    this.file = event.target.files[0];
    this.fileChanged.emit(this.file);
    console.log(event.target.files[0]);
  }
}
