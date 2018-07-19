import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { FieldsOfMenu } from '../layout-landing-page/layout-landing-page.types';

@Component({
  selector: 'exc-layout-navigation',
  templateUrl: './layout-navigation.component.html',
  styleUrls: ['./layout-navigation.component.scss'],
})
export class LayoutNavigationComponent implements OnInit {
  @ViewChild(MatDrawer) drawer: MatDrawer;
  @Input() fields: FieldsOfMenu[];

  constructor() {
  }

  ngOnInit() {
  }
}
