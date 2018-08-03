import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-confirm-role-page',
  templateUrl: './notifications-admin.component.html',
  styleUrls: ['./notifications-admin.component.scss']
})
export class NotificationsAdminComponent {
  navLinksAdmin = [
    { path: '/personal-menu/notifications/confirm-role', label: 'Подтвердить роль' },
    { path: '/personal-menu/notifications/confirm-test', label: 'Запрос теста' },
    { path: '/personal-menu/notifications/check-answer', label: 'Проверить тесты' }
  ];

  navLinksTeacher = [
    { path: '/personal-menu/notifications/confirm-test', label: 'Запрос теста' },
    { path: '/personal-menu/notifications/check-answer', label: 'Проверить тесты' }
  ];

  constructor(private userService: UserService) {
  }

  getFields() {
    if (this.userService.role === 'ADMIN') {
      return this.navLinksAdmin;
    } else {
      return this.navLinksTeacher;
    }
  }
}
