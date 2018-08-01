import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Test } from '../Types/TestList.type';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'exc-test-all-tests-student',
  templateUrl: './test-all-tests-student.component.html',
  styleUrls: ['./test-all-tests-student.component.scss']
})
export class TestAllTestsStudentComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['name', 'deadline', 'teacher', 'button'];

  constructor() {
    this.dataSource = new MatTableDataSource<Test>([{
      name: 'dftyuigf ftuyukiljh frtyyuu',
      deadline: 3456785456784,
      teacher: 'Василенко'
    },
    {
      name: 'dftyuigf ftuyukiljh frtyyuu',
      teacher: 'Василенко'
    },
    {
      name: 'dftyuigf ftuyukiljh frtyyuu',
      deadline: 3456785,
      teacher: 'Василенко'
    }]);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  isDisabled(value) {
    const date = new Date();
    if (value - date.valueOf() < 0) {
      return true;
    }
    return false;
  }

  clickButton() {
    console.log('kek');
  }

}
