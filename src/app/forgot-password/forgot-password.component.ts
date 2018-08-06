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
    const body = {
      email: this.form.get('email').value
    };
    this.userService.forgotPassword(body).subscribe(() => {
        this.everythingIsOk = true;
      },
      (error) => {
      console.log(error);
        this.everythingIsOk = false;
      });
    this.showTextMessage = true;
  }
}
