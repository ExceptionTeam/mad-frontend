import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'exc-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent {
  form: FormGroup;
  showTextMessage: boolean;
  everythingIsOk: boolean;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
    this.showTextMessage = false;
  }

  deleteText() {
    this.form.patchValue({ email: '' });
  }

  onSubmit() {
    this.showTextMessage = true;
    this.everythingIsOk = true; // ответ с сервера
    console.log(this.form.value.email);
  }
}
