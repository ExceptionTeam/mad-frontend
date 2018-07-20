import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/*import {Http} from '@angular/http';*/

export interface DataPost {
  taskId: string;
  studentId: string;
}

@Component({
  selector: 'exc-task-sending-page',
  templateUrl: './task-sending-page.component.html',
  styleUrls: ['./task-sending-page.component.scss']
})
export class TaskSendingPageComponent {
  file: File;
  dataPost: DataPost;

  constructor(/*public http: Http*/
              private activatedRoute: ActivatedRoute) {
  }

  onClick(event) {
    console.log(this.file);
    const id = this.activatedRoute.snapshot.params.id;
    console.log('id: ', id);
    /*const formData = new FormData();
    formData.append('solutionFile', this.file);
    formData.append('data', JSON.stringify(this.dataPost));
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
