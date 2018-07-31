import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentsTableComponent } from 'src/app/all-students-table/all-students-table.component';
import { MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TestStatisticsUsersPageComponent } from './test-statistics-users-page.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ],
  declarations: [
    AllStudentsTableComponent,
    TestStatisticsUsersPageComponent
  ],
  exports: [],
  providers: [],
})

export class TestStatisticsUsersPageModule {
}
