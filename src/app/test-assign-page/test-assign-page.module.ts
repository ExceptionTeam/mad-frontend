import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { TaskAssigningModule } from '../task-assigning-window/task-assigning.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TestAssignPageComponent } from '../test-assign-page/test-assign-page.component';
import { TestTagsValidator } from '../test-tags-validator/test-tags-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    TaskAssigningModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  declarations: [
    TestAssignPageComponent,
    TestTagsValidator
   ],
  exports: [TestAssignPageComponent],
  providers: [],
})

export class TestAssignModule {
}
