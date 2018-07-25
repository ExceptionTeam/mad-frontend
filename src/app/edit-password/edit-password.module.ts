import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { EditPasswordComponent} from './edit-password.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { MatDividerModule} from '@angular/material';
import { MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule
  ],
  declarations: [EditPasswordComponent],
  exports: [EditPasswordComponent],
  providers: []
})
export class EditPasswordModule {
}
