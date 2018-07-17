import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss']
})
export class LayoutFooterComponent implements OnInit {
  year = '2018';
  author = 'Team Exception';

  constructor() {
  }

  ngOnInit() {
  }

}
