import { Component, EventEmitter, Output } from '@angular/core';
import { Group, Student } from './select-student-or-group.types';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'exc-select-student-or-group',
  templateUrl: './select-student-or-group.component.html',
  styleUrls: ['./select-student-or-group.component.scss']
})
export class SelectStudentOrGroupComponent {
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
    this.tasksService.getStudentsAndGroups(this.id).
    subscribe(item => {this.indStudents = item.individualStudents;
    this.groups = item.groups;
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
