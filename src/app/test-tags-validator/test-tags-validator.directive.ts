import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

const reg = /^[^,.'"?!@:;\/]+$/;

function tagsValidation(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!reg.test(control.value)) {
      console.log('error');
      return { validTags: true };
    }
    return null;
  };
}

@Directive({
  selector: '[exc-test-tags-valid][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TestTagsValidator, multi: true }
  ]
})
export class TestTagsValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = tagsValidation();
  }

  validate(control: FormControl) {
    return this.validator(control);
  }
}
