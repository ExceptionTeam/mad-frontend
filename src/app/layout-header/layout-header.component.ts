import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'exc-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent {
  @Output() menuToggled = new EventEmitter<void>();
  title = 'Student\'s Exception';

  constructor(public userService: UserService,
              public router: Router) {
  }

  onMenuToggled() {
    this.menuToggled.emit();
  }

  onClickExit() {
    this.userService.signOut().subscribe();
    this.userService.role = '';
    this.router.navigate([`/home`]);
  }
}
