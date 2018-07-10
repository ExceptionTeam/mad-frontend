import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-menu',
  templateUrl: './personal-menu.component.html',
  styleUrls: ['./personal-menu.component.scss']
})
export class PersonalMenuComponent implements OnInit {

  personalMenu: string[] = ['Мои оповещения', 'Статистика', 'Смена пароля'];

  constructor() { }

  ngOnInit() {
  }

}
