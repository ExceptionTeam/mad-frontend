import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'exc-task-assigning-window',
  templateUrl: './task-assigning-window.component.html',
  styleUrls: ['./task-assigning-window.component.scss']
})
export class TaskAssigningWindowComponent implements OnInit {
  isSelectedLists: boolean;
  isGroupSelected: boolean;
  selectedId: string;
  minDate = new Date();
  constructor(private matDialogRef: MatDialogRef<TaskAssigningWindowComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  public closeModalWindow() {
    this.matDialogRef.close();
  }

  changeValidState(event) {
    this.isSelectedLists = event;
  }

  assignmentOfSelectedId(event) {
    this.selectedId = event;
  }

  isItGroup(event) {
    this.isGroupSelected = event;
    console.log('isGroupSelected ', this.isGroupSelected);
  }

  onSubmit(value) {
    console.log('id from assign a task! ', this.data._id);
    console.log(value.inputDate.valueOf());
  }
}
