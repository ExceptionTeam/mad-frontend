import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-layout-personal-menu',
  templateUrl: './layout-personal-menu.component.html',
  styleUrls: ['./layout-personal-menu.component.scss']
})
export class LayoutPersonalMenuComponent implements OnInit {
  personalMenu: string[] = ['Мои оповещения', 'Статистика', 'Смена пароля'];

  constructor() { }

  ngOnInit() {
  }
}
