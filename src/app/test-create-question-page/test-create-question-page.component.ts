import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const reg = /^[^,.'"?!@:;\/]+$/;

@Component({
  selector: 'exc-test-create-question-page',
  templateUrl: './test-create-question-page.component.html',
  styleUrls: ['./test-create-question-page.component.scss']
})
export class TestCreateQuestionPageComponent {
  firstForm: FormGroup;
  variantForm: FormGroup;
  wordForm: FormGroup;
  longAnsForm: FormGroup;
  // variants = [];
  sections: string[];
  value: number;
  showSecondPart: boolean;


  constructor(private fb: FormBuilder) {
    this.sections = ['многопоточность', 'еще раздел',
      'многопоточность', 'еще раздел',
      'многопоточность', 'еще раздел',
      'многопоточность', 'еще раздел',
      'многопоточность', 'еще раздел'];
    this.showSecondPart = false;
    this.value = 0;
    this.firstForm = this.fb.group({
      type: ['', Validators.required]
    });
    this.variantForm = this.fb.group({
      question: ['', Validators.required],
      variants: new FormArray([
        new FormGroup({ ans: new FormControl(''), rightAns: new FormControl(false) }),
        new FormGroup({ ans: new FormControl(''), rightAns: new FormControl(false) }),
      ]),
      section: ['', Validators.required],
      tags: ['', Validators.compose([this.tagsValidator, Validators.required])]
    });
    this.wordForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.compose([this.ansValidator, Validators.required])],
      section: ['', Validators.required],
      tags: ['', Validators.compose([this.tagsValidator, Validators.required])]
    });
    this.longAnsForm = this.fb.group({
      question: ['', Validators.required],
      section: ['', Validators.required],
      tags: ['', Validators.compose([this.tagsValidator, Validators.required])]
    });
  }

  get variants(): FormArray {
    return this.variantForm.get('variants') as FormArray;
  }

  addVariant() {
    console.log(this.variants.controls.values());
    this.variants.push(new FormGroup(
      { ans: new FormControl(''), rightAns: new FormControl(false) }
    ));
  }

  tagsValidator(control: AbstractControl) {
    if (!reg.test(control.value)) {
      return { validTags: true };
    }
    return null;
  }

  ansValidator(control: AbstractControl) {
    if (control.value.search(/[\s]+/) !== -1) {
      return { validAns: true };
    }
    return null;
  }

  addAnswer() {
    // this.variants.push('');
    // console.log(this.variants);
  }

  onFirstSubmit() {
    this.showSecondPart = true;
    this.value = 50;
  }

  onSubmitWithVariants() {
    console.log(this.variantForm.value);
    console.log('tags:', this.variantForm.get('tags').value.split(/[\s]+/));
  }

  onSubmitAnsWord() {
    console.log(this.wordForm.value);
  }

  onSubmitLongAnswer() {
    console.log(this.longAnsForm.value);
  }

}
