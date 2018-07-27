import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material'; '';

@Component({
  selector: 'exc-all-students-admin-page',
  templateUrl: './all-students-admin-page.component.html',
  styleUrls: ['./all-students-admin-page.component.scss']
})
export class AllStudentsAdminPageComponent implements OnInit {
  dataSourse = new MatTableDataSource<Object>([
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
    { name: 'dfs', surname: 'fesf', university: 'fefwe' },
  ]);
  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSourse.filter = filterValue.trim().toLowerCase();
  }
}
