import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAllTestsStudentComponent } from 'src/app/test-all-tests-student/test-all-tests-student.component';
import { MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule
  ],
  declarations: [
    TestAllTestsStudentComponent
  ],
  exports: [],
  providers: [],
})

export class TestAllTestsStudentsModule {
}
