import { Component, Input, OnInit } from '@angular/core';
import { FieldsOfMenu } from '../layout-landing-page/layout-landing-page.types';

@Component({
  selector: 'exc-layout-personal-menu',
  templateUrl: './layout-personal-menu.component.html',
  styleUrls: ['./layout-personal-menu.component.scss']
})
export class LayoutPersonalMenuComponent implements OnInit {
  @Input() fields: FieldsOfMenu[];

  constructor() {
  }

  ngOnInit() {
  }
}
