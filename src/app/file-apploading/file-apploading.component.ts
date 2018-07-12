import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-file-apploading',
  templateUrl: './file-apploading.component.html',
  styleUrls: ['./file-apploading.component.scss']
})
export class FileApploadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onChange(event) {
    console.log(event.target.files[0]);
  }
}
