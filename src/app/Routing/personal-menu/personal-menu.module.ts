import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonalMenuRoutingModule} from './personal-menu-routing.module';
import { MyGroupsTeacherPageModule } from '../../my-groups-teacher-page/my-groups-teacher-page.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    PersonalMenuRoutingModule,
    MyGroupsTeacherPageModule
  ],
  providers: [],
  bootstrap: []
})
export class PersonalMenuModule {
}
