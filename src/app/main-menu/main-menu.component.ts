import {Component, OnInit} from '@angular/core';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  showFiller = false;

  constructor(){}

  ngOnInit(){
  }
}
