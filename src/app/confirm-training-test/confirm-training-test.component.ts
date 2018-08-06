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
        this.requests = data;
        console.log('requests: ', this.requests);
        this.onDisplay = this.getRequests(0, 2);
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
    request.onclickDone = done;
    if (done) {
      this.testService.confirmTest(request._id, this.userService.id).subscribe(() => {
        },
        (error) => {
          console.log(error);
        });
    } else {
      this.testService.rejectTest(request._id).subscribe();
    }
  }
}
