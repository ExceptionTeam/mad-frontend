import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutNavigationComponent } from '../layout-navigation/layout-navigation.component';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-layout-landing-page',
  templateUrl: './layout-landing-page.component.html',
  styleUrls: ['./layout-landing-page.component.scss']
})
export class LayoutLandingPageComponent implements OnInit {
  @ViewChild(LayoutNavigationComponent) mainMenu: LayoutNavigationComponent;
  menu;

  ngOnInit() {
  }

  constructor(private userService: UserService) {
  }

  onMenuToggled() {
    this.mainMenu.drawer.toggle();
  }
}
