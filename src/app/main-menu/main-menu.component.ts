import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'exc-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  showFiller = false;

  tests: string[] = ['Запросить тренировочный тест', 'Мои тесты'];
  test = 'Мои тесты';
  buttons: string[] = ['Мои задачи', 'Материалы'];

  constructor() {
  }

  ngOnInit() {
  }
}
