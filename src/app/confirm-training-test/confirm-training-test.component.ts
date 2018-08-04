import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { TestService } from '../test.service';
import { UserService } from '../user.service';
import { ConfirmTestInfo } from './confirmTest.type';

@Component({
  selector: 'exc-confirm-training-test',
  templateUrl: './confirm-training-test.component.html',
  styleUrls: ['./confirm-training-test.component.scss']
})
export class ConfirmTrainingTestComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  onDisplay: ConfirmTestInfo[];
  requests: ConfirmTestInfo[];
  onclickDone = null;

  constructor(private testService: TestService,
              private userService: UserService) {
    this.userService.getInfo().subscribe(user => {
      this.testService.teacherGetRequests(user.id).subscribe(data => {
          this.requests = data.map(request => ({ ...request, display: true, onclickDone: null }));
          console.log('requests: ', this.requests);
          this.onDisplay = this.getRequests(0, 2);
        },
        error => {
          console.log('error, ', error);
        });
    });
  }

  getRequests(skip: number, top: number) {
    return this.requests.slice(skip, top);
  }

  onPaginateChange() {
    this.onDisplay = this.getRequests(this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageIndex * this.paginator.pageSize + this.paginator.pageSize);
  }

  onclickConfirm(request, done) {
    request.display = false;
    if (done) {
      request.onclickDone = true;
    } else {
      request.onclickDone = false;
    }
     // this.testService.teacherGetRequests(request.id).subscribe();
  }
}
