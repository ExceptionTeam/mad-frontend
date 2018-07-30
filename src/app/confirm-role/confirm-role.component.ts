import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'exc-confirm-role',
  templateUrl: './confirm-role.component.html',
  styleUrls: ['./confirm-role.component.scss']
})
export class ConfirmRoleComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  requestsRole = [
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' },
    { name: 'Жанна Витальевна', surname: 'Василенко', email: 'zh.vasilenko@exadel.com', placeOfWork: 'БГУ' }
  ];
  req;
  requests;

  getRequests(skip: number, top: number) {
    return this.requests.slice(skip, top);
  }

  onPaginateChange() {
    this.req = this.getRequests(this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageIndex * this.paginator.pageSize + this.paginator.pageSize);
  }

  constructor() {
    this.requests = this.requestsRole.map(request => ({ ...request, display: true }));
    this.req = this.getRequests(0, 10);
  }

  onclickConfirm(request) {
    request.display = false;
  }
}
