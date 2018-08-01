import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { TestPassingPageComponent } from './test-passing-page.component';
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TestSeveralAnswerComponent } from '../test-several-answer/test-several-answer.component';
import { TestSeveralWordAnswerComponent } from '../test-several-word-answer/test-several-word-answer.component';
import { TestOneAnswerComponent } from '../test-one-answer/test-one-answer.component';
import { TestWordAnswerComponent } from '../test-word-answer/test-word-answer.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    TestPassingPageComponent,
    TestSeveralAnswerComponent,
    TestSeveralWordAnswerComponent,
    TestOneAnswerComponent,
    TestWordAnswerComponent
  ],
  exports: [],
  providers: [],
})
export class TestPassingPageModule {
}
