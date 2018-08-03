import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'exc-edit-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  form: FormGroup;
  showTextMessage: boolean;
  everythingIsOk: boolean;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
    this.showTextMessage = false;
  }

  deleteText() {
    this.form.patchValue({ email: '' });
  }

  onSubmit() {
    // this.userService.resetPassword().subscribe();
    this.showTextMessage = true;
    this.everythingIsOk = true; // ответ с сервера
    console.log(this.form.value.email);
  }
}
