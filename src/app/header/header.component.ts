import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'exc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Student\'s Exception';

  constructor() {
  }

  ngOnInit() {
  }
}
