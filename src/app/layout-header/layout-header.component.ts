import { Component, EventEmitter, Output } from '@angular/core';
import { FieldsOfMenu } from '../layout-landing-page/layout-landing-page.types';

@Component({
  selector: 'exc-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent {
  @Output() menuToggled = new EventEmitter<void>();
  title = 'Student\'s Exception';

  studentPersMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '' },
    { name: 'Статистика', link: '' },
    { name: 'Смена пароля', link: '/personal-menu/edit-password' }
  ];

  teacherPersonalMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '' },
    { name: 'Смена пароля', link: '/personal-menu/edit-password' }
  ];

  adminPersonalMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '/personal-menu/notifications/confirm-role' },
    { name: 'Смена пароля', link: 'personal-menu/edit-password' }
  ];

  onMenuToggled() {
    this.menuToggled.emit();
  }
}
