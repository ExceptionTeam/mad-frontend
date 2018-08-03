import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { FieldsOfMenu } from '../layout-landing-page/layout-landing-page.types';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-layout-navigation',
  templateUrl: './layout-navigation.component.html',
  styleUrls: ['./layout-navigation.component.scss'],
})

export class LayoutNavigationComponent implements OnInit {
  @ViewChild(MatDrawer) drawer: MatDrawer;

  studentNavMenu: FieldsOfMenu[] = [
    { name: 'Мои тесты', link: 'test/tests-table' },
    { name: 'Мои задачи', link: 'task/table-student' },
    { name: 'Статистика', link: '' },
    { name: 'Материлы', link: '' },
  ];

  teacherNavMenu: FieldsOfMenu[] = [
    { name: 'Вопросы', link: 'test/questions-admin' },
    { name: 'Тесты', link: 'test/assigned-tests' },
    { name: 'Задачи', link: 'task/table-teacher' },
    { name: 'Мои группы', link: '/my-groups' },
    { name: 'Материалы', link: '' },
  ];

  adminNavMenu: FieldsOfMenu[] = [
    { name: 'Вопросы', link: 'test/questions-admin' },
    { name: 'Задачи', link: 'task/table-teacher' },
    { name: 'Мои группы', link: '/my-groups' },
    { name: 'Ученики', link: 'test/statistics/students' },
    { name: 'Учителя', link: 'test/statistics/teachers' },
    { name: 'Тесты', link: 'test/statistics' },
    { name: 'Лента активности', link: 'activity' },
    { name: 'Материалы', link: '' },
  ];

  constructor(public userService: UserService) {
  }

  getArray() {
    if (this.userService.role === 'TEACHER') {
      return this.teacherNavMenu;
    }
    if (this.userService.role === 'ADMIN') {
      return this.adminNavMenu;
    }
    if (this.userService.role === 'STUDENT') {
      return this.studentNavMenu;
    }
  }

  ngOnInit() {
  }
}
