import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'exc-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {
  form: FormGroup;
  hide: boolean;

  constructor(private fb: FormBuilder) {
    this.hide = true;
    this.form = this.fb.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }

}
