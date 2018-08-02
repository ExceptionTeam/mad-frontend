import { Component, OnInit } from '@angular/core';
import { FieldsOfMenu } from '../layout-landing-page/layout-landing-page.types';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-layout-personal-menu',
  templateUrl: './layout-personal-menu.component.html',
  styleUrls: ['./layout-personal-menu.component.scss']
})
export class LayoutPersonalMenuComponent implements OnInit {
  menu;

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
    if (userService.role === 'TEACHER') {
      this.menu = this.teacherPersonalMenu;
    }
    if (userService.role === 'ADMIN') {
      this.menu = this.adminPersonalMenu;
    }
    if (userService.role === 'STUDENT') {
      this.menu = this.studentPersonalMenu;
    }
  }

  ngOnInit() {
  }
}
