import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestStatisticsTestsPageComponent } from '../../test-statistics-tests-page/test-statistics-tests-page.component';
import { TestStatisticsUsersPageComponent } from '../../test-statistics-users-page/test-statistics-users-page.component';
import { TestPassingPageComponent } from '../../test-passing-page/test-passing-page.component';

const taskRoutes: Routes = [
  {
    path: 'test',
    children: [
      {
        path: 'statistics-tests',
        component: TestStatisticsTestsPageComponent
      },
      {
        path: 'statistics-students',
        component: TestStatisticsUsersPageComponent
      },
      {
        path: 'statistics-teachers',
        component: TestStatisticsUsersPageComponent
      },
      {
        path: 'test',
        component: TestPassingPageComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(taskRoutes)],
  exports: [RouterModule],
})
export class TestRoutingModule {
}

