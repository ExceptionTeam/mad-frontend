import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule } from '@angular/material';
import { MainPageComponent } from './main-page.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  providers: [],
  bootstrap: []
})
export class MainPageModule {
}
