import { Component, ViewChild } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'exc-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss']
})
export class GeneralLayoutComponent {
  @ViewChild(MainMenuComponent) mainMenu: MainMenuComponent;

  onMenuToggled() {
    this.mainMenu.drawer.toggle();
  }

}
