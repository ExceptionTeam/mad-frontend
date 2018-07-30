import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-confirm-role-page',
  templateUrl: './notifications-admin.component.html',
  styleUrls: ['./notifications-admin.component.scss']
})
export class NotificationsAdminComponent implements OnInit {
  role = 'teacher';
  links;

  navLinksAdmin = [
    { path: '/personal-menu/notifications/confirm-role', label: 'Подтвердить роль' },
    { path: '/personal-menu/notifications/confirm-test', label: 'Запрос теста' },
    { path: '/personal-menu/notifications/check-answer', label: 'Проверить тесты' }
  ];

  navLinksTeacher = [
    { path: '/personal-menu/notifications/confirm-test', label: 'Запрос теста' },
    { path: '/personal-menu/notifications/check-answer', label: 'Проверить тесты' }
  ];


  constructor() {
    if (this.role === 'admin') {
      this.links = this.navLinksAdmin;
    } else {
      this.links = this.navLinksTeacher;
    }
  }

  ngOnInit() {
  }

}
