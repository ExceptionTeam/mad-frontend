import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'exc-assign-a-task',
  templateUrl: './assign-a-task.component.html',
  styleUrls: ['./assign-a-task.component.scss']
})
export class AssignATaskComponent implements OnInit {
  constructor(private matDialogRef: MatDialogRef<AssignATaskComponent>) {
  }

  ngOnInit() {
  }

  public closeModalWindow() {
    this.matDialogRef.close();
  }
}
