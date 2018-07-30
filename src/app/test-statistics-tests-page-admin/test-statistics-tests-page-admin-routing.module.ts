import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestStatisticsTestsPageAdminComponent } from './test-statistics-tests-page-admin.component';

const routes: Routes = [
  {
    path: 'admin/statistics',
    component: TestStatisticsTestsPageAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TestStatisticsTestsPageAdminRouting {
}
