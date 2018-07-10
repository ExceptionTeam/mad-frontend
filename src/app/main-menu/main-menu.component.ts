import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'exc-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  @ViewChild(MatDrawer) drawer: MatDrawer;

  showFiller = false;

  tests: string[] = ['Запросить тренировочный тест', 'Мои тесты'];
  test = 'Мои тесты';
  buttons: string[] = ['Мои задачи', 'Материалы'];

  constructor() {
  }

  ngOnInit() {
  }
}
