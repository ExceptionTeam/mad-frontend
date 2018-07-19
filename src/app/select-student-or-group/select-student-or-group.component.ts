import { Component, EventEmitter, Output } from '@angular/core';
import { Group, Student } from './select-student-or-group.types';

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

  indStudents: Student[] = [
    { _id: '2', name: 'Аня Кисель' },
    { _id: '32', name: 'Влад Малиновский' },
    { _id: '32', name: 'Лиля Оданец' },
    { _id: '43', name: 'Леша Мухарский' },
    { _id: '14', name: 'Артем Германенко' },
  ];

  groups: Group[] = [
    {
      _id: '97652', name: '5 группа', students:
        [{ _id: '2', name: 'Аня Кисель' },
          { _id: '32', name: 'Влад Малиновский' },
          { _id: '32', name: 'Лиля Оданец' },
          { _id: '43', name: 'Леша Мухарский' },
          { _id: '14', name: 'Артем Германенко' },
        ]
    },
    {
      _id: '3', name: '6 группа', students:
        [{ _id: '2', name: 'Аня Кисель' },
          { _id: '32', name: 'Влад Малиновский' },
          { _id: '32', name: 'Лиля Оданец' },
          { _id: '43', name: 'Леша Мухарский' },
          { _id: '14', name: 'Артем Германенко' },
        ]
    }
  ];

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
