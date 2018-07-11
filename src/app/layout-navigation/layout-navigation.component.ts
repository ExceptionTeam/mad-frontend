import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'exc-main-menu',
  templateUrl: './layout-navigation.component.html',
  styleUrls: ['./layout-navigation.component.scss'],
})
export class LayoutNavigationComponent implements OnInit {
  @ViewChild(MatDrawer) drawer: MatDrawer;

  showFiller = false;

  buttons: string[] = ['Мои тесты', 'Мои задачи', 'Материалы'];

  constructor() {
  }

  ngOnInit() {
  }
}
