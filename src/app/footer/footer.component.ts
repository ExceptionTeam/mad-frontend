import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'exc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = '2018';
  author = 'Team Exception';

  constructor() {
  }

  ngOnInit() {
  }

}
