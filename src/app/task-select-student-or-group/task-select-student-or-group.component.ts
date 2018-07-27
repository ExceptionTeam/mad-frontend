import { Component, EventEmitter, Output } from '@angular/core';
import { Group, Student } from './task-select-student-or-group.types';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'exc-task-select-student-or-group',
  templateUrl: './task-select-student-or-group.component.html',
  styleUrls: ['./task-select-student-or-group.component.scss']
})
export class TaskSelectStudentOrGroupComponent {
  @Output() idOfSelected = new EventEmitter<string>();
  @Output() isSelEvent = new EventEmitter<boolean>();
  @Output() isGroupSelected = new EventEmitter<boolean>();
  isGroup: boolean;
  id: string;
  isSelected: boolean;
  selectedValue: string;
  isDisabledStudent = false;
  isDisabledGroup = false;
  indStudents: Student[] = [];
  groups: Group[] = [];

  constructor(private tasksService: TaskService) {
    console.log(this.id);
    this.tasksService.getStudentsAndGroups(this.id).subscribe(item => {
        this.indStudents = item.individualStudents;
        console.log(this.indStudents);
        this.groups = item.groups;
        console.log(this.groups);
      }
    );
  }

  groupIsNotDisabled() {
    this.isDisabledGroup = false;
    this.isSelected = false;
    this.isSelEvent.emit(this.isSelected);
  }

  groupIsDisabled(selectedId) {
    this.isDisabledGroup = true;
    this.isSelected = true;
    this.isSelEvent.emit(this.isSelected);
    this.id = selectedId;
    console.log('id: ' + this.id);
    this.idOfSelected.emit(this.id);
    this.isGroup = false;
    this.isGroupSelected.emit(this.isGroup);
  }

  studentsIsNotDisabled() {
    this.isDisabledStudent = false;
    this.isSelected = false;
    this.isSelEvent.emit(this.isSelected);
  }

  studentsIsDisabled(selectedId) {
    this.isDisabledStudent = true;
    this.isSelected = true;
    this.isSelEvent.emit(this.isSelected);
    this.id = selectedId;
    this.idOfSelected.emit(this.id);
    this.isGroup = true;
    this.isGroupSelected.emit(this.isGroup);
  }
}
