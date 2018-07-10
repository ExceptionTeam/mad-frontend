import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})

export class DropDownListComponent {
  @Input() fields: string[];
  @Input() placeholder: string;
}
