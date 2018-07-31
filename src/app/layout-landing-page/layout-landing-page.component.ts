import { Component, ViewChild } from '@angular/core';
import { LayoutNavigationComponent } from '../layout-navigation/layout-navigation.component';
import { FieldsOfMenu } from './layout-landing-page.types';

@Component({
  selector: 'exc-layout-landing-page',
  templateUrl: './layout-landing-page.component.html',
  styleUrls: ['./layout-landing-page.component.scss']
})
export class LayoutLandingPageComponent {
  @ViewChild(LayoutNavigationComponent) mainMenu: LayoutNavigationComponent;

  studentNavMenu: FieldsOfMenu[] = [
    { name: 'Мои тесты', link: '' },
    { name: 'Мои задачи', link: 'task/table-student' },
    { name: 'Статистика', link: '' },
    { name: 'Материлы', link: '' },
  ];

  teacherNavMenu: FieldsOfMenu[] = [
    { name: 'Вопросы', link: '' },
    { name: 'Тесты', link: '' },
    { name: 'Задачи', link: 'task/table-teacher' },
    { name: 'Мои группы', link: '/my-groups' },
    { name: 'Материалы', link: '' },
  ];

  adminNavMenu: FieldsOfMenu[] = [
    { name: 'Вопросы', link: '' },
    { name: 'Задачи', link: 'task/table-teacher' },
    { name: 'Мои группы', link: '/my-groups' },
    { name: 'Ученики', link: 'test/statistics-students' },
    { name: 'Учителя', link: '' },
    { name: 'Тесты', link: 'test/statistics-tests' },
    { name: 'Лента активности', link: '' },
    { name: 'Материалы', link: '' },
  ];

  onMenuToggled() {
    this.mainMenu.drawer.toggle();
  }
}
