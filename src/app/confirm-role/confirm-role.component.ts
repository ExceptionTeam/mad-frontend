import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { UserService } from '../user.service';

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
  onDisplay;
  requests;

  getRequests(skip: number, top: number) {
    return this.requests.slice(skip, top);
  }

  onPaginateChange() {
    this.onDisplay = this.getRequests(this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageIndex * this.paginator.pageSize + this.paginator.pageSize);
  }

  constructor(private userService: UserService) {

    this.userService.getInfo().subscribe(user => {
      this.userService.confirmRole(0, 10).subscribe(data => {
        this.requests = data;
        console.log('requests: ', this.requests);
        this.onDisplay = this.getRequests(0, 2);
      });
    });
    // this.requests = this.requestsRole.map(request => ({ ...request, display: true }));
    // this.onDisplay = this.getRequests(0, 10);
  }

  onclickConfirm(request) {
    request.display = false;
  }
}
