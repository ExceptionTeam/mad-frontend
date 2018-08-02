import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'exc-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  form: FormGroup;
  hide: boolean;
  error: boolean;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              public router: Router) {
    this.hide = true;
    this.error = false;
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  onSubmit() {
    let user;
    const data = {
      username: this.form.value.email,
      password: this.form.value.password
    };
    this.userService.signIn(data).subscribe((res) => {
      console.log('yeaaah!');
      user = res;
      console.log('user=', user);
      this.userService.id = res.id;
      this.userService.role = res.role;
      this.router.navigate([`/home`]);
    }, err => {
      console.log('error');
      this.error = true;
    });
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }

  deleteInputValue() {
    this.form.patchValue({ email: '' });
  }
}
