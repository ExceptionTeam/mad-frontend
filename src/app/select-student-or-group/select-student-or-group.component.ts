import { Component } from '@angular/core';
import { Group, Student } from './select-student-or-group.types';

@Component({
  selector: 'exc-select-student-or-group',
  templateUrl: './select-student-or-group.component.html',
  styleUrls: ['./select-student-or-group.component.scss']
})
export class SelectStudentOrGroupComponent {
  indStudents: Student[] = [
    { _id: 2, name: 'Аня Кисель' },
    { _id: 32, name: 'Влад Малиновский' },
    { _id: 32, name: 'Лиля Одинец' },
    { _id: 43, name: 'Леша Мухарский' },
    { _id: 14, name: 'Артем Германенко' },
  ];

  groups: Group[] = [
    {
      _id: 2, name: '5 группа', students:
        [{ _id: 2, name: 'Аня Кисель' },
          { _id: 32, name: 'Влад Малиновский' },
          { _id: 32, name: 'Лиля Одинец' },
          { _id: 43, name: 'Леша Мухарский' },
          { _id: 14, name: 'Артем Германенко' },
        ]
    },
    {
      _id: 3, name: '6 группа', students:
        [{ _id: 2, name: 'Аня Кисель' },
          { _id: 32, name: 'Влад Малиновский' },
          { _id: 32, name: 'Лиля Одинец' },
          { _id: 43, name: 'Леша Мухарский' },
          { _id: 14, name: 'Артем Германенко' },
        ]
    }
  ];
  isDisabledStudent = false;
  isDisabledGroup = false;

  groupIsNotDisabled() {
    this.isDisabledGroup = false;
  }

  groupIsDisabled() {
    this.isDisabledGroup = true;
  }

  studentsIsNotDisabled() {
    this.isDisabledStudent = false;
  }

  studentsIsDisabled() {
    this.isDisabledStudent = true;
  }
}
