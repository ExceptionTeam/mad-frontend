import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'exc-test-statistics-tests-page',
  templateUrl: './test-statistics-tests-page.component.html',
  styleUrls: ['./test-statistics-tests-page.component.scss']
})
export class TestStatisticsTestsPageComponent implements OnInit {
  displayedColumns: string[] = ['student', 'result', 'teacher', 'date'];
  dataSource = new MatTableDataSource<object>([
    {
      studentName: 'gfodlshf',
      studentSurname: 'gfodlshf',
      result: 3,
      teacherName: 'ghjkl;',
      date: 35678548
    },
    {
      studentName: 'gfodlshf',
      studentSurname: 'gfodlshf',
      result: 3,
      teacherName: 'ghjkl;',
      date: 35678548
    },
    {
      studentName: 'gfodlshf',
      studentSurname: 'gfodlshf',
      student: 'gfodlshf',
      result: 3,
      teacherName: 'ghjkl;',
      date: 35678548
    },
    {
      studentName: 'gfodlshf',
      studentSurname: 'gfodlshf',
      student: 'gfodlshf',
      result: 3,
      teacherName: 'ghjkl;',
      date: 35678548
    },
    {
      studentName: 'gfodlshf',
      studentSurname: 'gfodlshf',
      student: 'gfodlshf',
      result: 3,
      teacherName: 'ghjkl;',
      date: 35678548
    },
    {
      studentName: 'gfodlshf',
      studentSurname: 'gfodlshf',
      student: 'gfodlshf',
      result: 3,
      teacherName: 'ghjkl;',
      date: 35678548
    }
  ]);

  constructor() {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
