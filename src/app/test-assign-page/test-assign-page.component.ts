import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-test-assign-page',
  templateUrl: './test-assign-page.component.html',
  styleUrls: ['./test-assign-page.component.scss']
})
export class TestAssignPageComponent implements OnInit {
  isSelectedLists: boolean;
  isGroupSelected: boolean;
  selectedId: string;
  minDate = new Date();
  constructor() {
  }

  ngOnInit() {
  }

  changeValidState(event) {
    this.isSelectedLists = event;
  }

  assignmentOfSelectedId(event) {
    this.selectedId = event;
  }

  isItGroup(event) {
    this.isGroupSelected = event;
    console.log('isGroupSelected ', this.isGroupSelected);
  }
}
