import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-confirm-role-page',
  templateUrl: './notifications-admin.component.html',
  styleUrls: ['./notifications-admin.component.scss']
})
export class NotificationsAdminComponent implements OnInit {
  navLinks = [
    { path: '/personal-menu/notifications/confirm-role', label: 'Подтвердить роль' },
    { path: '', label: 'Запрос теста' },
    { path: '', label: 'Проверить тесты' }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}