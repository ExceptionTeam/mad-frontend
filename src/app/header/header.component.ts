import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'exc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<void>();
  title = 'Student\'s Exception';

  onMenuToggled() {
    this.menuToggled.emit();
  }
}
