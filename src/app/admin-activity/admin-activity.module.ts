import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule, MatPaginatorModule } from '@angular/material';
import { AdminActivityComponent } from './admin-activity.component';

@NgModule({
  imports: [BrowserModule, MatListModule, MatPaginatorModule],
  declarations: [AdminActivityComponent],
  exports: [AdminActivityComponent],
  providers: []
})
export class AdminActivityModule {}
