import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-confirm-role',
  templateUrl: './confirm-role.component.html',
  styleUrls: ['./confirm-role.component.scss']
})
export class ConfirmRoleComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  onDisplay;
  requests;
  total: number;

  getRequests(skip: number, top: number) {
    return this.requests.slice(skip, top);
  }

  onPaginateChange() {
    this.userService.getConfirmRole(this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageIndex * this.paginator.pageSize + this.paginator.pageSize).subscribe(data => {
      this.onDisplay = data.teachers;
      this.total = data.total;

    });
  }

  constructor(private userService: UserService) {
    this.userService.getConfirmRole(0, 10).subscribe(data => {
      this.onDisplay = data.teachers;
      this.total = data.total;
      console.log('data: ', data);
    });
  }

  onclickConfirm(request, done) {
    request.display = false;
    request.onclickDone = done;
    if (done) {
      this.userService.confirmRole(request._id).subscribe(() => {
        },
        (error) => {
          console.log(error);
        });
    } else {
      this.userService.rejectRole(request._id).subscribe();
    }
  }
}
