import { NgModule } from '@angular/core';
import { TestStatisticsUsersPageModule } from '../../test-statistics-users-page/test-statistics-users-page.module';
import { TestStatisticsTestsPageModule } from '../../test-statistics-tests-page/test-statistics-tests-page.module';
import { TestRoutingModule } from './test-routing.module';
import { TestPassingPageModule } from '../../test-passing-page/test-passing-page.module';
import { TestAllTestsStudentsModule } from '../../test-all-tests-student/test-all-tests-student.module';
import { TestAssignModule } from '../../test-assign-page/test-assign-page.module';
import { AllAssignedTestsModule } from 'src/app/test-all-assigned-tests-page/all-assigned-tests.module';
import { TestCreateQuestionModule } from '../../test-create-question-page/test-create-question.module';

@NgModule({
  imports: [
    TestStatisticsUsersPageModule,
    TestStatisticsTestsPageModule,
    TestRoutingModule,
    TestPassingPageModule,
    TestAllTestsStudentsModule,
    TestAssignModule,
    AllAssignedTestsModule,
    TestRoutingModule,
    TestCreateQuestionModule
  ],
  exports: [],
  declarations: [],
})
export class TestModule {
}
