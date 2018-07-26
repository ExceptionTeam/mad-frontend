import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPasswordComponent } from '../edit-password/edit-password.component';


const routes: Routes = [
  {
    path: 'edit-password',
    component: EditPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PersonalMenuRoutingModule {
}
