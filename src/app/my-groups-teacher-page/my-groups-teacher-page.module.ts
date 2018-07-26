import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGroupsTeacherPageComponent } from 'src/app/my-groups-teacher-page/my-groups-teacher-page.component';
import { MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: [
    MyGroupsTeacherPageComponent
  ],
  exports: [],
  providers: [],
})

export class MyGroupsTeacherPageModule {
}
