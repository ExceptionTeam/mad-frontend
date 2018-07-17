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
    { name: 'Смена пароля', link: '' }
  ];

  teacherPersonalMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '' },
    { name: 'Мои группы', link: '' },
    { name: 'Смена пароля', link: '' }
  ];

  adminPersonalMenu: FieldsOfMenu[] = [
    { name: 'Мои оповещения', link: '' },
    { name: 'Смена пароля', link: '' }
  ];


  onMenuToggled() {
    this.menuToggled.emit();
  }
}
