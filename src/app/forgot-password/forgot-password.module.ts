import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';

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
  declarations: [ForgotPasswordComponent],
  exports: [ForgotPasswordComponent],
  providers: []
})
export class ForgotPasswordModule {
}
