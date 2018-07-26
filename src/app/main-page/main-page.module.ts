import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule } from '@angular/material';
import { MainPageComponent } from './main-page.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainPageRoutingModule } from './main-page-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MainPageRoutingModule
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  providers: [],
  bootstrap: []
})
export class MainPageModule {
}
