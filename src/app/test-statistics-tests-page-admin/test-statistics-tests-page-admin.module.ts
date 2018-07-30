import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TestStatisticsTestsPageAdminComponent } from './test-statistics-tests-page-admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { TestStatisticsTestsPageAdminRouting } from './test-statistics-tests-page-admin-routing.module';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    TestStatisticsTestsPageAdminRouting,
    MatPaginatorModule
  ],
  declarations: [
    TestStatisticsTestsPageAdminComponent
  ],
  exports: [],
  providers: [],
})
export class TestStatisticsTestsPageAdminModule {
}
