import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page.component';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    RouterModule
  ],
  declarations: [SignInPageComponent],
  exports: [SignInPageComponent],
  providers: []
})
export class SignInModule {
}
