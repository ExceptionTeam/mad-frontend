import { Component, EventEmitter, Output } from '@angular/core';
import { FieldsOfMenu } from '../layout-landing-page/layout-landing-page.types';

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
