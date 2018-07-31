import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'exc-test-statistics-users-page',
  templateUrl: './test-statistics-users-page.component.html',
  styleUrls: ['./test-statistics-users-page.component.scss']
})
export class TestStatisticsUsersPageComponent implements OnInit {
  dataSourse = new MatTableDataSource<Object>([
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
  ]);

  constructor() {
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSourse.filter = filterValue.trim().toLowerCase();
  }
}
