import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'exc-confirm-role',
  templateUrl: './confirm-role.component.html',
  styleUrls: ['./confirm-role.component.scss']
})
export class ConfirmRoleComponent {
  requests = [
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
  @ViewChild(MatPaginator) paginator: MatPaginator;


  getRequests(skip: number, top: number) {
    return this.requests.slice(skip, top);
  }

  onPaginateChange() {
    this.req = this.getRequests(this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageIndex * this.paginator.pageSize + this.paginator.pageSize);
  }

  constructor() {
    this.req = this.getRequests(0, 10);
  }
}
