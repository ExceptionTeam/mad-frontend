import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';

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
  private id;
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
    this.userService.getInfo().subscribe(data => { this.id = data.id; });
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
    if (this.isChecked !== true) {
    this.testService.que.type = 'PRIMARY';
    } else {
      this.testService.que.type = 'TRAINING';
    }
    this.testService.que.difficulty = this.selected;
  }

  onclickBack() {
    this.showSecondPart = false;
    this.value = 0;
  }

  onSubmitWithVariants(value) {
    let count = 0;
    this.testService.que.answerOptions = [];
    this.testService.que.correctOptions = [];
    this.testService.que.questionAuthorId = this.id;
    this.testService.que.question = value.question;
    this.testService.que.tags = value.tags.trim().split(' ');
    this.testService.que.section = value.section.trim().split(' ');
    value.variants.forEach(element => {
      this.testService.que.answerOptions.push(element.ans);
      if (element.rightAns) {
        count++;
        this.testService.que.correctOptions.push(element.ans);
      }
    });
    if (count === 1) {
    this.testService.que.category = 'SINGLE_ANSWER';
    } else {
      this.testService.que.category = 'MULTIPLE_ANSWERS';
    }

    this.testService.postAddQuestion().subscribe( data => this.router.navigate([`/test/questions-admin`]) );
  }

  onSubmitAnsWord(value) {
    this.testService.que.questionAuthorId = this.id;
    this.testService.que.category = 'WORD_ANSWER';
    this.testService.que.question = value.question;
    this.testService.que.tags = value.tags.trim().split(' ');
    this.testService.que.section = value.section.trim().split(' ');
    this.testService.que.correctOptions = value.answer.trim().split(' ');
    this.testService.postAddQuestion().subscribe( data => this.router.navigate([`/test/questions-admin`]) );
  }

  onSubmitLongAnswer(value) {
    this.testService.que.questionAuthorId = this.id;
    this.testService.que.category = 'SENTENCE_ANSWER';
    this.testService.que.question = value.question;
    this.testService.que.tags = value.tags.trim().split(' ');
    this.testService.que.section = value.section.trim().split(' ');
    this.testService.postAddQuestion().subscribe( data => this.router.navigate([`/test/questions-admin`]) );
  }
}
