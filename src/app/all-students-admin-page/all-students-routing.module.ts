import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsAdminPageComponent } from './all-students-admin-page.component';

const routes: Routes = [
  {
    path: 'all-students',
    component: AllStudentsAdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AllStudentsRoutingModule {
}
