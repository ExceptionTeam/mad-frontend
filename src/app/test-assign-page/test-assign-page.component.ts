import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { UserService } from '../user.service';
import { TestAssign } from '../Types/TestAssign.type';
import { Router } from '@angular/router';

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
  public isChecked = true;
  constructor(private testService: TestService, private userService: UserService, private router: Router) {
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

  onSubmit(value) {
  this.userService.getInfo().subscribe(user => {
    const test: TestAssign = this.isGroupSelected ? {
      status: 'PENDING',
      trainingPercentage: 0.5,
      groupId: this.selectedId,
      teacherId: user.id,
      name: value.inputName,
      tags: value.inputTags.trim().split(' '),
      timeToPass: value.inputTime * 60000,
      deadline: value.inputDate.valueOf(),
      testSize: Number(value.inputCount),
      type: (this.isChecked) ? 'TRAINING' : 'PRIMARY'
    } : {
      status: 'PENDING',
      trainingPercentage: 0.5,
      studentId: this.selectedId,
      teacherId: user.id,
      name: value.inputName,
      tags: value.inputTags.trim().split(' '),
      timeToPass: value.inputTime * 60000,
      deadline: value.inputDate.valueOf(),
      testSize: Number(value.inputCount),
      type: (this.isChecked) ? 'TRAINING' : 'PRIMARY'
      };
    this.testService.postAssignTest(test).subscribe( data => this.router.navigate([`/test/assigned-tests`]));
  });
  }
}
