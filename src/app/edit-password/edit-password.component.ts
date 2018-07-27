import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
      newPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        // this.passwordMatch.bind(this)
      ])],
      repeatPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        // this.passwordMatch.bind(this)
      ])]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }

  isWrongRepeat() {
    console.log(this.form.get('newPassword').dirty &&
      (this.form.get('repeatPassword').dirty)
      && this.form.hasError('NotEqual'));
    return this.form.get('newPassword').dirty &&
      this.form.get('repeatPassword').dirty
      && this.form.hasError('NotEqual');
  }

  private passwordMatch() {
    return this.form && this.form.get('newPassword').value === this.form.get('repeatPassword').value
      ? null
      : { NotEqual: true };
  }
}
