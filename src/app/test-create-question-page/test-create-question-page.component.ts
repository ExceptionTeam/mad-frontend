import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';
import { QuestionAdding } from '../Types/QuestionAdding.type';

const reg = /^[^,.'"?!@:;\/]+$/;

const everythigIsOkkkk = (array) => {
  let countCheck = 0;
  let countAns = 0;
  const res = array.every(item => {
    if (item.ans === '' && item.rightAns) {
      return false;
    }
    if (item.rightAns) {
      countCheck++;
    }
    if (item.ans !== '') {
      countAns++;
    }
    return true;
  });
  if (countCheck === 0 || countAns === 0 || countAns === 1) {
    return false;
  }
  return res;
};

const ansVariantsValidator = (control: AbstractControl) => {
  if (!everythigIsOkkkk(control.value) && control.dirty) {
    return {
      validVariants: true
    };
  }
  return null;
};

const tagsValidator = (control: AbstractControl) => {
  if (!reg.test(control.value)) {
    return { validTags: true };
  }
  return null;
};

const ansWordValidator = (control: AbstractControl) => {
  if (/[\s]+/.test(control.value)) {
    return { validAns: true };
  }
  return null;
};

@Component({
  selector: 'exc-test-create-question-page',
  templateUrl: './test-create-question-page.component.html',
  styleUrls: ['./test-create-question-page.component.scss']
})
export class TestCreateQuestionPageComponent implements OnInit {
  firstForm: FormGroup;
  variantForm: FormGroup;
  wordForm: FormGroup;
  longAnsForm: FormGroup;
  sections: string[];
  value: number;
  showSecondPart: boolean;
  filteredOptions: Observable<string[]>;
  difficulty = ['1', '2', '3', '4'];
  public isChecked = false;
  public selected;

  constructor(private fb: FormBuilder, private testService: TestService, private userService: UserService, private router: Router ) {
    this.sections = [
      'многопоточность', 'еще раздел',
      'многопоточность', 'еще раздел',
      'многопоточность', 'еще раздел',
      'многопоточность', 'еще раздел',
      'многопоточность', 'еще раздел'
    ];
    this.showSecondPart = false;
    this.value = 0;
    this.firstForm = this.fb.group({
      training: [false],
      type: ['', Validators.required],
      difficulty: ['', Validators.required],
    });
    this.variantForm = this.fb.group({
      question: ['', Validators.required],


      variants: new FormArray([
        new FormGroup({ ans: new FormControl(''), rightAns: new FormControl(false) }),
        new FormGroup({ ans: new FormControl(''), rightAns: new FormControl(false) }),
      ], ansVariantsValidator),

      section: ['', Validators.required],
      tags: ['', Validators.compose([tagsValidator, Validators.required])]
    });
    this.wordForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.compose([ansWordValidator, Validators.required])],
      section: ['', Validators.required],
      tags: ['', Validators.compose([tagsValidator, Validators.required])]
    });
    this.longAnsForm = this.fb.group({
      question: ['', Validators.required],
      section: ['', Validators.required],
      tags: ['', Validators.compose([tagsValidator, Validators.required])]
    });
  }

  ngOnInit() {
    this.filteredOptions = this.wordForm.get('section').valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? this._filter(value) : this.sections)
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.sections.filter(option => option.toLowerCase().includes(filterValue));
  }

  get variants(): FormArray {
    return this.variantForm.get('variants') as FormArray;
  }

  addVariant() {
    this.variants.push(new FormGroup(
      { ans: new FormControl(''), rightAns: new FormControl(false) }
    ));
  }

  onFirstSubmit() {
    this.showSecondPart = true;
    this.value = 50;
  }

  onclickBack() {
    this.showSecondPart = false;
    this.value = 0;
  }

  onSubmitWithVariants(value) {
    const all = [];
    const correct = [];
    let count = 0;
        value.variants.forEach(element => {
          if (element.ans !== '') {
     all.push(element.ans);
          }
      if (element.rightAns) {
        count++;
       correct.push(value.variants.indexOf(element));
      }
    });

    this.userService.getInfo().subscribe(user => {
      const question: QuestionAdding =  {
        type: this.isChecked ? 'TRAINING' : 'PRIMARY',
        difficulty: Number(this.selected),
        questionAuthorId: user.id,
        question: value.question,
        tags: value.tags.trim().split(' '),
        section: value.section.trim().split(' '),
        active: true,
        category: (count > 1 ) ? 'MULTIPLE_ANSWERS' : 'SINGLE_ANSWER',
        answerOptions: all,
        correctOptions: correct
      };
      this.testService.postAddQuestion(question).subscribe( data => this.router.navigate([`/test/questions-admin`]));
    });
  }

  onSubmitAnsWord(value) {
    this.userService.getInfo().subscribe(user => {
      const question: QuestionAdding =  {
        category: 'WORD_ANSWER',
        type: this.isChecked ? 'TRAINING' : 'PRIMARY',
        difficulty: Number(this.selected),
        questionAuthorId: user.id,
        question: value.question,
        tags: value.tags.trim().split(' '),
        section: value.section.trim().split(' '),
        correctOptions: value.answer.trim().split(' '),
        active: true
      };
      this.testService.postAddQuestion(question).subscribe( data => this.router.navigate([`/test/questions-admin`]));
    });
  }

  onSubmitLongAnswer(value) {
    this.userService.getInfo().subscribe(user => {
      const question: QuestionAdding =  {
        category: 'SENTENCE_ANSWER',
        type: this.isChecked ? 'TRAINING' : 'PRIMARY',
        difficulty: Number(this.selected),
        questionAuthorId: user.id,
        question: value.question,
        tags: value.tags.trim().split(' '),
        section: value.section.trim().split(' '),
        active: true
      };
      this.testService.postAddQuestion(question).subscribe( data => this.router.navigate([`/test/questions-admin`]));
    });
  }
}
