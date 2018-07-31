import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TestStatisticsTestsPageComponent } from './test-statistics-tests-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { TestStatisticsTestsPageAdminRouting } from './test-statistics-tests-page-admin-routing.module';
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    TestStatisticsTestsPageAdminRouting,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    TestStatisticsTestsPageComponent
  ],
  exports: [],
  providers: [],
})
export class TestStatisticsTestsPageModule {
}
