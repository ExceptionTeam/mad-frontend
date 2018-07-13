import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'exc-assign-a-task',
  templateUrl: './assign-a-task.component.html',
  styleUrls: ['./assign-a-task.component.scss']
})
export class AssignATaskComponent implements OnInit {
  constructor(private matDialogRef: MatDialogRef<AssignATaskComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  public closeModalWindow() {
    this.matDialogRef.close();
  }
}
