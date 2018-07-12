import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-task-sending-page',
  templateUrl: './task-sending-page.component.html',
  styleUrls: ['./task-sending-page.component.css']
})
export class TaskSendingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    console.log('send');
  }
}
