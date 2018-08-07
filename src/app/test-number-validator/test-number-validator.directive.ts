import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

const reg = /^\d+$/;

function numberValidation(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!reg.test(control.value)) {
      console.log('error');
      return { validTags: true };
    }
    return null;
  };
}

@Directive({
  selector: '[exc-test-number-valid][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TestNumberValidator, multi: true }
  ]
})
export class TestNumberValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = numberValidation();
  }

  validate(control: FormControl) {
    return this.validator(control);
  }
}
