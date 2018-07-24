import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TaskService } from 'src/app/task.service';
import { AssignRequestData } from 'src/app/Types/AssignRequestData.type';

@Component({
  selector: 'exc-assign-a-task',
  templateUrl: './assign-a-task.component.html',
  styleUrls: ['./assign-a-task.component.scss']
})
export class AssignATaskComponent implements OnInit {
  isSelectedLists: boolean;
  isGroupSelected: boolean;
  selectedId: string;
  minDate = new Date();
  constructor(private matDialogRef: MatDialogRef<AssignATaskComponent>,
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
    console.log('id from assign a task! ', this.data._id);
    console.log(this.selectedId);
    console.log(value.inputDate.valueOf());
    const data: AssignRequestData = this.isGroupSelected ? {
      taskId: '111111111111111111111111',
      groupId: '5b520791fdbcf907d07ac183',
      teacherId: '5b520978359e36150c9335fb',
      deadline: 47286930
    } : {
        taskId: '111111111111111111111111',
        studentId: '5b520791fdbcf907d07ac183',
        teacherId: '5b520978359e36150c9335fb',
        deadline: 47286930
      };
    console.log(data);
    this.tasksService.postAssignTask(data).subscribe();
  }
}
