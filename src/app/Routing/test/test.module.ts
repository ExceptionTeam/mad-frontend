import { NgModule } from '@angular/core';
import { TestStatisticsUsersPageModule } from '../../test-statistics-users-page/test-statistics-users-page.module';
import { TestStatisticsTestsPageModule } from '../../test-statistics-tests-page/test-statistics-tests-page.module';
import { TestRoutingModule } from './test-routing.module';
import { TestCreateQuestionModule } from '../../test-create-question-page/test-create-question.module';

@NgModule({
  imports: [
    TestStatisticsUsersPageModule,
    TestStatisticsTestsPageModule,
    TestRoutingModule,
    TestCreateQuestionModule
  ],
  exports: [],
  declarations: [],
})
export class TestModule {
}
