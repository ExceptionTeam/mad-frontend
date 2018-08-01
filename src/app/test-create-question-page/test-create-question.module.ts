import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCreateQuestionPageComponent } from './test-create-question-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    TestCreateQuestionPageComponent
  ],
  declarations: [
    TestCreateQuestionPageComponent
  ],
  providers: [],
})
export class TestCreateQuestionModule {
}
