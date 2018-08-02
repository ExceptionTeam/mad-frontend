import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Test } from '../Types/TestList.type';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'exc-test-all-tests-student',
  templateUrl: './test-all-tests-student.component.html',
  styleUrls: ['./test-all-tests-student.component.scss']
})
export class TestAllTestsStudentComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['name', 'deadline', 'teacher', 'button'];

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource<Test>([{
      _id: '1',
      name: 'dftyuigf ftuyukiljh frtyyuu',
      deadline: 3456785456784,
      teacher: 'Василенко'
    },
    {
      _id: '2',
      name: 'dftyuigf ftuyukiljh frtyyuu',
      teacher: 'Василенко'
    },
    {
      _id: '3',
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

  clickButton(event) {
    console.log(event);
  }
}
