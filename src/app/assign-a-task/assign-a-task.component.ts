import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'exc-assign-a-task',
  templateUrl: './assign-a-task.component.html',
  styleUrls: ['./assign-a-task.component.scss']
})
export class AssignATaskComponent implements OnInit {
  isSelectedLists: boolean;
  selectedId: string;

  constructor(private matDialogRef: MatDialogRef<AssignATaskComponent>) {
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

  onSubmit(value) {
    console.log(value.inputDate._d.getTime());
  }

}
