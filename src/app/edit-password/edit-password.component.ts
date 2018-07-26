import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
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
    console.log(this.form.value);
  }

  isWrongRepeat() {
    console.log(this.form.get('repeatPassword').touched  && this.form.hasError('NotEqual'));
    /// this.form.reset();
    return  (this.form.get('repeatPassword').touched || this.form.get('repeatPassword').dirty) && this.form.hasError('NotEqual');
  }

}
