import { NgModule } from '@angular/core';
import { PersonalMenuRoutingModule } from './personal-menu-routing.module';
import { MyGroupsTeacherPageModule } from '../../my-groups-teacher-page/my-groups-teacher-page.module';
import { NotificationsAdminModule } from '../../notifications-admin/notifications-admin.module';
import { NotificationsPageStudentModule } from '../../notifications-page-student/notifications-page-student.module';

@NgModule({
  declarations: [],
  imports: [
    PersonalMenuRoutingModule,
    MyGroupsTeacherPageModule,
    NotificationsAdminModule,
    NotificationsPageStudentModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class PersonalMenuModule {
}
