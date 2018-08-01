import { NgModule } from '@angular/core';
import { TestStatisticsUsersPageModule } from '../../test-statistics-users-page/test-statistics-users-page.module';
import { TestStatisticsTestsPageModule } from '../../test-statistics-tests-page/test-statistics-tests-page.module';
import { TestRoutingModule } from './test-routing.module';
import { TestPassingPageModule } from '../../test-passing-page/test-passing-page.module';

@NgModule({
  imports: [
    TestStatisticsUsersPageModule,
    TestStatisticsTestsPageModule,
    TestRoutingModule,
    TestPassingPageModule
  ],
  exports: [],
  declarations: [],
})
export class TestModule {
}
