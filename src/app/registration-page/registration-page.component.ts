import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { TaskService } from 'src/app/task.service';

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

  constructor(private _formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.nameSurnameFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      isStudent: ['', Validators.required]
    });
    this.universityFormGroup = this._formBuilder.group({
      university: ['', Validators.required],
      primarySkill: ['', Validators.required],
      faculty: ['', Validators.required],
      year: ['', Validators.required],
    }
    );
    this.filteredOptions = this.universityFormGroup.get('university').valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? this._filter(value) : this.options)
    );
  }

  private _filter(value: string): string[] {
    console.log(value);
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  submitRegistration() {
    const acc = this.nameSurnameFormGroup.value.isStudent === 'student' ? {
      university: this.universityFormGroup.value.university,
      year: this.universityFormGroup.value.year,
      faculty: this.universityFormGroup.value.faculty
      } : {
        university: this.universityFormGroup.value.university
      };
    const body = {
      name: this.nameSurnameFormGroup.value.name,
      surname: this.nameSurnameFormGroup.value.surname,
      email: this.nameSurnameFormGroup.value.email,
      isStudent:  this.nameSurnameFormGroup.value.isStudent === 'student' ? true : false,
      primarySkill: this.universityFormGroup.value.primarySkill,
      account: acc
    };
    console.log(body);
    this.taskService.postRegistrate(body).subscribe();
  }

  changeRole(role) {
    this.nameSurnameFormGroup.patchValue({
      isStudent: role.value
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
