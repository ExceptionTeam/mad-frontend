import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TestQuestionsTableAdminComponent } from './test-questions-table-admin.component';
import { TestQuestionsSearchComponent } from '../test-questions-search/test-questions-search.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ],
  declarations: [
    TestQuestionsTableAdminComponent,
    TestQuestionsSearchComponent
  ],
  exports: [
    TestQuestionsTableAdminComponent,
    TestQuestionsSearchComponent],
  providers: [],
  entryComponents: []
})
export class TestQuestionsTableAdminModule {
}
