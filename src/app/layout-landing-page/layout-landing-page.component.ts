import { Component, ViewChild } from '@angular/core';
import { LayoutNavigationComponent } from '../layout-navigation/layout-navigation.component';
import { NavigationMenuField } from './layout-landing-page.types';

@Component({
  selector: 'exc-layout-landing-page',
  templateUrl: './layout-landing-page.component.html',
  styleUrls: ['./layout-landing-page.component.scss']
})
export class LayoutLandingPageComponent {
  @ViewChild(LayoutNavigationComponent) mainMenu: LayoutNavigationComponent;

  studentNavMenu: NavigationMenuField[] = [
    { name: 'Мои тесты', link: '' },
    { name: 'Мои задачи', link: 'tasks-student' },
    { name: 'Материлы', link: '' },
  ];

  teacherNavMenu: NavigationMenuField[] = [
    { name: 'Вопросы', link: '' },
    { name: 'Тесты', link: '' },
    { name: 'Задачи', link: 'tasks-teacher' },
    { name: 'Мои студенты', link: '' },
    { name: 'Материалы', link: '' },
  ];

  adminNavMenu: NavigationMenuField[] = [
    { name: 'Вопросы', link: '' },
    { name: 'Тесты', link: '' },
    { name: 'Задачи', link: 'tasks-teacher' },
    { name: 'Статистика по ученикам', link: '' },
    { name: 'Статистика по учителям', link: '' },
    { name: 'Статистика по тестам', link: '' },
    { name: 'Статистика по задачам', link: '' },
    { name: 'Лента активности', link: '' },
    { name: 'Материалы', link: '' },
  ];


  onMenuToggled() {
    this.mainMenu.drawer.toggle();
  }
}
