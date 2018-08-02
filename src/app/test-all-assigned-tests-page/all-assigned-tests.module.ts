import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAllAssignedTestsPageComponent } from 'src/app/test-all-assigned-tests-page/test-all-assigned-tests-page.component';
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
    TestAllAssignedTestsPageComponent
  ],
  exports: [],
  providers: [],
})

export class AllAssignedTestsModule {
}
