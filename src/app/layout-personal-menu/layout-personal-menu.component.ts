import { Component, Input, OnInit } from '@angular/core';
import { FieldsOfMenu } from '../layout-landing-page/layout-landing-page.types';

@Component({
  selector: 'exc-layout-personal-menu',
  templateUrl: './layout-personal-menu.component.html',
  styleUrls: ['./layout-personal-menu.component.scss']
})
export class LayoutPersonalMenuComponent implements OnInit {
  studentPersMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '' },
    { name: 'Статистика', link: '' },
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

  constructor() {
  }

  ngOnInit() {
  }
}
