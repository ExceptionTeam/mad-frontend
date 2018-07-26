import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule } from '@angular/material';
import { HomePageComponent } from './home-page.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    HomePageRoutingModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  providers: [],
  bootstrap: []
})
export class HomePageModule {
}
