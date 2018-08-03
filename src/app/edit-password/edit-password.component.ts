import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

const passwordMatch = (form: FormGroup) =>
  form.get('newPassword').value === form.get('repeatPassword').value
    ? null
    : { NotEqual: true };

@Component({
  selector: 'exc-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {
  form: FormGroup;
  hideOld: boolean;
  hideNew: boolean;
  hideRepeat: boolean;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              public router: Router) {
    this.hideOld = true;
    this.hideNew = true;
    this.hideRepeat = true;
    this.form = this.fb.group({
      oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }, { validator: passwordMatch });
  }

  ngOnInit() {
  }

  onSubmit() {
    const body = {
      oldPass: this.form.get('oldPassword').value,
      newPass: this.form.get('newPassword').value
    };
    console.log('body, ', body);
    this.userService.editPassword(body).subscribe();
    this.router.navigate([`/home`]);
    console.log(this.form.value);
  }

  isWrongRepeat() {
    return this.form.get('newPassword').dirty &&
      this.form.get('repeatPassword').dirty
      && this.form.hasError('NotEqual');
  }
}
