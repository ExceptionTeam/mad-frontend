import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Group, Student } from './assign-a-task.types';

@Component({
  selector: 'exc-assign-a-task',
  templateUrl: './assign-a-task.component.html',
  styleUrls: ['./assign-a-task.component.scss']
})
export class AssignATaskComponent implements OnInit {
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

  constructor(private matDialogRef: MatDialogRef<AssignATaskComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  public close() {
    this.matDialogRef.close();
  }
}
