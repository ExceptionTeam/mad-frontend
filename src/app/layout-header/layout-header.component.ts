import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'exc-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent {
  @Output() menuToggled = new EventEmitter<void>();
  title = 'Student\'s Exception';

  onMenuToggled() {
    this.menuToggled.emit();
  }
}
