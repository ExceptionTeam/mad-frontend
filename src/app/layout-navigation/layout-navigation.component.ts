import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'exc-layout-navigation',
  templateUrl: './layout-navigation.component.html',
  styleUrls: ['./layout-navigation.component.scss'],
})
export class LayoutNavigationComponent implements OnInit {
  @ViewChild(MatDrawer) drawer: MatDrawer;
  links: string[] = ['Мои тесты', 'Мои задачи', 'Материалы'];

  constructor() {
  }

  ngOnInit() {
  }
}
