import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'exc-confirm-training-test',
  templateUrl: './confirm-training-test.component.html',
  styleUrls: ['./confirm-training-test.component.scss']
})
export class ConfirmTrainingTestComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  requestsTest = [
    {
      _id: '1',
      userId: { _id: '12', name: 'Аня', surname: 'Кисель' },
      sectionId: { _id: '12', name: 'Многопоточность' },
      status: 'PENDING'
    },
    {
      _id: '2',
      userId: { _id: '12', name: 'Аня', surname: 'Кисель' },
      sectionId: { _id: '12', name: 'Многопоточность' },
      status: 'PENDING'
    },
    {
      _id: '3',
      userId: { _id: '12', name: 'Аня', surname: 'Кисель' },
      sectionId: { _id: '12', name: 'Многопоточность' },
      status: 'PENDING'
    },
    {
      _id: '4',
      userId: { _id: '12', name: 'Аня', surname: 'Кисель' },
      sectionId: { _id: '12', name: 'Многопоточность' },
      status: 'PENDING'
    },
    {
      _id: '5',
      userId: { _id: '12', name: 'Аня', surname: 'Кисель' },
      sectionId: { _id: '12', name: 'Многопоточность' },
      status: 'PENDING'
    }
  ];
  onDisplay;
  requests;

  constructor() {
    this.requests = this.requestsTest.map(request => ({ ...request, display: true }));
    this.onDisplay = this.getRequests(0, 10);
  }

  getRequests(skip: number, top: number) {
    console.log(this.requests);

    return this.requests.slice(skip, top);
  }

  onPaginateChange() {
    this.onDisplay = this.getRequests(this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageIndex * this.paginator.pageSize + this.paginator.pageSize);
  }

  onclickConfirm(request) {
    request.display = false;
  }
}
