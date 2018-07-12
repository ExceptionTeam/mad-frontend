import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'exc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() countCaracters: number;
  @Input() placeholder: string;

  constructor() {
  }

  ngOnInit() {
  }

}
