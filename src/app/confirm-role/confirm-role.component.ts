import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-confirm-role',
  templateUrl: './confirm-role.component.html',
  styleUrls: ['./confirm-role.component.scss']
})
export class ConfirmRoleComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
