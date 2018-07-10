import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'exc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Student\'s Exception';

  @Output() menuToggled: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
