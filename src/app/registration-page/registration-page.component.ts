import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'exc-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  nameSurnameFormGroup: FormGroup;
  universityFormGroup: FormGroup;
  options: string[] = ['БГУ', 'БНТУ', 'БГУИР'];
  filteredOptions: Observable<string[]>;

  constructor(private _formBuilder: FormBuilder) {
    this.nameSurnameFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      role: ['', Validators.required]
    });
    this.universityFormGroup = this._formBuilder.group({
      university: ['', Validators.required],
      primarySkill: ['', Validators.required],
      faculty: ['', Validators.required],
      year: ['', Validators.required],
    }
    );
    if (this.universityFormGroup.get('university').value) {
      this.filteredOptions = this.universityFormGroup.get('university').valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  submitRegistration() {
    console.log(this.universityFormGroup.value);
    console.log(this.nameSurnameFormGroup.value);
  }

  changeRole(role) {
    this.nameSurnameFormGroup.patchValue({
      role: role.value
    });
    this.resetSecForm();
  }

  resetSecForm() {
    this.universityFormGroup.reset({
      university: [''],
      primarySkill: [''],
      faculty: [''],
      year: [''],
    });
  }
}