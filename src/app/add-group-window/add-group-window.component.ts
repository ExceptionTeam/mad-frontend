import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { GroupsService } from '../groups.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'exc-add-group-window',
  templateUrl: './add-group-window.component.html',
  styleUrls: ['./add-group-window.component.scss']
})
export class AddGroupWindowComponent implements OnInit {
  formName: FormGroup;
  error: boolean;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private groupService: GroupsService,
              private router: Router,
              private dialog: MatDialog) {
    this.formName = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    const body = {
      name: this.formName.get('name').value,
      teacherId: this.userService.id
    };
    this.groupService.createGroup(body).subscribe(() => {
      },
      () => {
        this.error = true;
      });
    this.dialog.closeAll();
  }

  ngOnInit() {
  }
}
