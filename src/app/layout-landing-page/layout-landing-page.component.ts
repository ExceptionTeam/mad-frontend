import { Component, ViewChild } from '@angular/core';
import { LayoutNavigationComponent } from '../layout-navigation/layout-navigation.component';

@Component({
  selector: 'exc-layout-landing-page',
  templateUrl: './layout-landing-page.component.html',
  styleUrls: ['./layout-landing-page.component.scss']
})
export class LayoutLandingPageComponent {
  @ViewChild(LayoutNavigationComponent) mainMenu: LayoutNavigationComponent;

  onMenuToggled() {
    this.mainMenu.drawer.toggle();
  }
}
