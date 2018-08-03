import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { TestTeacher } from '../Types/TestsTeacher.type';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'exc-test-all-assigned-tests-page',
  templateUrl: './test-all-assigned-tests-page.component.html',
  styleUrls: ['./test-all-assigned-tests-page.component.scss']
})
export class TestAllAssignedTestsPageComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['student' , 'name', 'deadline', 'mark', 'buttons'];

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource<TestTeacher>([{
      _id: '1',
      name: 'ООП',
      deadline: 3456785456784,
      student: 'Иванов'
    },
    {
      _id: '2',
      mark: 7,
      name: 'Массивы',
      student: 'Круглов'
    },
    {
      _id: '3',
      mark: 7,
      name: 'Сокеты',
      deadline: 3456785,
      student: 'Андреев'
    }]);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  clickButton(event) {
    console.log(event);
  }
}
