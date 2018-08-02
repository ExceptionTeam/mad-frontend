import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminActivityComponent } from './admin-activity.component';

const routes: Routes = [
  {
    path: 'activity',
    component: AdminActivityComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {
}

