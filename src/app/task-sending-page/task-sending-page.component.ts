import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

export interface DataForPost {
  taskId: string;
  studentId: string;
}

@Component({
  selector: 'exc-task-sending-page',
  templateUrl: './task-sending-page.component.html',
  styleUrls: ['./task-sending-page.component.scss']
})
export class TaskSendingPageComponent implements OnInit {
  file: File;
  dataForPost: DataForPost;
  constructor(public http: Http) { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(this.file);
    /*const formData = new FormData();
    formData.append('solutionFile', this.file);
    formData.append('data', JSON.stringify(this.dataForPost));
    this.http.post('/smth', formData).subscribe(
      function(response) {
         console.log('Success Response' + response
        );
    },
      function(error) {
         console.log('Error happened' + error);
    },
      function() {
         console.log('the subscription is completed');
    }
    );*/
  }

  onFileChanged(event) {
    this.file = event;
  }
}
