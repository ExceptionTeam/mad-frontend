import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'exc-add-group-window',
  templateUrl: './add-group-window.component.html',
  styleUrls: ['./add-group-window.component.scss']
})
export class AddGroupWindowComponent implements OnInit {
  formName: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formName = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.formName.value);
  }

  ngOnInit() {
  }
}
