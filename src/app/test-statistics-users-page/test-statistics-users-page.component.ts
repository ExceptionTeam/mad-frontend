import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'exc-test-statistics-users-page',
  templateUrl: './test-statistics-users-page.component.html',
  styleUrls: ['./test-statistics-users-page.component.scss']
})
export class TestStatisticsUsersPageComponent implements OnInit {
  dataSourse = new MatTableDataSource<Object>([
    { name: 'Влад', surname: 'Малиновский', university: 'fefwe' },
    { name: 'Влад', surname: 'Малиновский', university: 'fefwe' },
    { name: 'Влад', surname: 'Малиновский', university: 'fefwe' },
    { name: 'Влад', surname: 'Малиновский', university: 'fefwe' },
    { name: 'Влад', surname: 'Малиновский', university: 'fefwe' },
  ]);

  constructor(private router: Router,
              private testService: TestService) {
  }

  onSearch(query: string) {
    this.testService.searchParams.query = query.toLowerCase();
    this.testService.searchParams.paging.pageIndex = 0;

    if (this.router.url.includes('students')) {
      this.testService.loadUsers('student');
    } else {
      this.testService.loadUsers('teacher');
    }
  }


  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSourse.filter = filterValue.trim().toLowerCase();
  }
}
