import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule, MatPaginatorModule } from '@angular/material';
import { AdminActivityComponent } from './admin-activity.component';
import { ActivityRoutingModule } from './activity-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    MatListModule,
    MatPaginatorModule,
    ActivityRoutingModule
  ],
  declarations: [AdminActivityComponent],
  exports: [AdminActivityComponent],
  providers: []
})
export class AdminActivityModule {
}
