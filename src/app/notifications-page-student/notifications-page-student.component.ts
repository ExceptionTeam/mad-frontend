import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'exc-notifications-page-student',
  templateUrl: './notifications-page-student.component.html',
  styleUrls: ['./notifications-page-student.component.scss']
})
export class NotificationsPageStudentComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  checkAnswer = [
    {
      _id: '1',
      userId: { _id: '12', name: 'Жанна Витальевна', surname: 'Василенко' },
      sectionId: {
        _id: '12',
        name: 'Многопоточность',
      },
      isTestChecked: true,
      mark: 10,
      date: 1532955203513
    },
    {
      _id: '2',
      userId: { _id: '12', name: 'Жанна Витальевна', surname: 'Василенко' },
      sectionId: {
        _id: '12',
        name: 'Многопоточность',
      },
      isTestChecked: false,
      mark: 10,
      date: 1532955203513
    },
    {
      _id: '3',
      userId: { _id: '12', name: 'Жанна Витальевна', surname: 'Василенко' },
      sectionId: {
        _id: '12',
        name: 'Многопоточность',
      },
      isTestChecked: false,
      mark: 10,
      date: 1532955203513
    },
    {
      _id: '4',
      userId: { _id: '12', name: 'Жанна Витальевна', surname: 'Василенко' },
      sectionId: {
        _id: '12',
        name: 'Многопоточность',
      },
      isTestChecked: false,
      mark: 10,
      date: 1532955203513
    },
    {
      _id: '5',
      userId: { _id: '12', name: 'Жанна Витальевна', surname: 'Василенко' },
      sectionId: {
        _id: '12',
        name: 'Многопоточность',
      },
      isTestChecked: true,
      mark: 10,
      date: 1532955203513
    },
    {
      _id: '6',
      userId: { _id: '12', name: 'Жанна Витальевна', surname: 'Василенко' },
      sectionId: {
        _id: '12',
        name: 'Многопоточность',
      },
      isTestChecked: true,
      mark: 10,
      date: 1532955203513
    },
  ];
  onDisplay;
  requests;

  getRequests(skip: number, top: number) {
    return this.requests.slice(skip, top);
  }

  onPaginateChange() {
    this.onDisplay = this.getRequests(this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageIndex * this.paginator.pageSize + this.paginator.pageSize);
  }

  constructor() {
    this.requests = this.checkAnswer.map(request => ({ ...request, display: true }));
    this.onDisplay = this.getRequests(0, 10);
  }

  passTheTest(request) {
    console.log(request._id);
  }
}
