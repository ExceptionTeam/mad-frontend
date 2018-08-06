import { Component, OnInit } from '@angular/core';
import { FieldsOfMenu } from '../layout-landing-page/layout-landing-page.types';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-layout-personal-menu',
  templateUrl: './layout-personal-menu.component.html',
  styleUrls: ['./layout-personal-menu.component.scss']
})
export class LayoutPersonalMenuComponent implements OnInit {
  role: string;

  studentPersonalMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '/personal-menu/notifications/tests' },
    { name: 'Смена пароля', link: '/personal-menu/edit-password' }
  ];

  teacherPersonalMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '/personal-menu/notifications/confirm-test' },
    { name: 'Смена пароля', link: '/personal-menu/edit-password' }
  ];

  adminPersonalMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '/personal-menu/notifications/confirm-role' },
    { name: 'Смена пароля', link: 'personal-menu/edit-password' }
  ];

  constructor(public userService: UserService) {
  }

  getPersArray() {
    if (this.userService.role === 'TEACHER') {
      return this.teacherPersonalMenu;
    }
    if (this.userService.role === 'ADMIN') {
      return this.adminPersonalMenu;
    }
    if (this.userService.role === 'STUDENT') {
      return this.studentPersonalMenu;
    }
  }

  ngOnInit() {
  }
}
