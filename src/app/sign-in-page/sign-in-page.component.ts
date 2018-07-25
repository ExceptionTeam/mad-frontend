import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'exc-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  email: string;
  password: string;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.password = '';
    this.email = '';
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required,  Validators.minLength(6)])],
    });
  }

  ngOnInit() {
  }

  getValue() {
    console.log('email: ', this.email);
  }

  onSubmit() {
    console.log(this.email);
    console.log(this.password);
  }
}
