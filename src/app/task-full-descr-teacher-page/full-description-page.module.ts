import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskFullDescrTeacherComponent } from './task-full-descr-teacher.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [
    TaskFullDescrTeacherComponent,
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class FullDescriptionPageModule {
}
