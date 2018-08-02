import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestStatisticsTestsPageComponent } from '../../test-statistics-tests-page/test-statistics-tests-page.component';
import { TestStatisticsUsersPageComponent } from '../../test-statistics-users-page/test-statistics-users-page.component';
import { TestPassingPageComponent } from '../../test-passing-page/test-passing-page.component';
import { TestAllTestsStudentComponent } from '../../test-all-tests-student/test-all-tests-student.component';
import { TestAssignPageComponent } from '../../test-assign-page/test-assign-page.component';
import { TestQuestionsSearchComponent } from '../../test-questions-search/test-questions-search.component';

const taskRoutes: Routes = [
  {
    path: 'test',
    children: [
      {
        path: 'statistics',
        children: [
          {
            path: '',
            component: TestStatisticsTestsPageComponent
          },
          {
            path: 'students',
            component: TestStatisticsUsersPageComponent
          },
          {
            path: 'teachers',
            component: TestStatisticsUsersPageComponent
          },
        ]
      },
      {
        path: 'passing',
        component: TestPassingPageComponent
      },
      {
        path: 'tests-table',
        component: TestAllTestsStudentComponent
      },
      {
        path: 'assign',
        component: TestAssignPageComponent
      },
      {
        path: 'questions-admin',
        component: TestQuestionsSearchComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(taskRoutes)],
  exports: [RouterModule],
})
export class TestRoutingModule {
}

