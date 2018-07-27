import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TaskService } from 'src/app/task.service';
import { AssignRequestData } from 'src/app/Types/AssignRequestData.type';

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
  constructor(private matDialogRef: MatDialogRef<TaskAssigningWindowComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
     private tasksService: TaskService) {
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
    const data: AssignRequestData = this.isGroupSelected ? {
      taskId: this.data._id,
      groupId: this.selectedId,
      teacherId: '5b520978359e36150c9335fb',
      deadline: value.inputDate.valueOf()
    } : {
        taskId: this.data._id,
        studentId: this.selectedId,
        teacherId: '5b520978359e36150c9335fb',
        deadline: value.inputDate.valueOf()
      };
    console.log(data);
    this.tasksService.postAssignTask(data).subscribe();
  }
}
