import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutNavigationComponent } from './layout-navigation/layout-navigation.component';
import { LayoutPersonalMenuComponent } from './layout-personal-menu/layout-personal-menu.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutLandingPageComponent } from './layout-landing-page/layout-landing-page.component';
import { MatListModule } from '@angular/material/list';
import { TaskViewSendingComponent } from './task-view-sending/task-view-sending.component';
import { MatCardModule } from '@angular/material/card';
import { FileUploadingComponent } from './file-uploading/file-uploading.component';
import { TaskSendingPageComponent } from './task-sending-page/task-sending-page.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { AllTasksTeacherComponent } from './all-tasks-teacher/all-tasks-teacher.component';
import { MatInputModule, MatPaginator } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { TableMyTasksTeacherComponent } from './table-my-tasks-teacher/table-my-tasks-teacher.component';
import { StudentTasksTableComponent } from './student-tasks-table/student-tasks-table.component';
import { AssignATaskComponent } from './assign-a-task/assign-a-task.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectStudentOrGroupComponent } from './select-student-or-group/select-student-or-group.component';
import { TaskFullDescrTeacherComponent } from './task-full-descr-teacher/task-full-descr-teacher.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutNavigationComponent,
    LayoutPersonalMenuComponent,
    LayoutFooterComponent,
    LayoutLandingPageComponent,
    TaskViewSendingComponent,
    FileUploadingComponent,
    TaskSendingPageComponent,
    AllTasksTeacherComponent,
    TableMyTasksTeacherComponent,
    TableMyTasksTeacherComponent,
    StudentTasksTableComponent,
    AssignATaskComponent,
    SelectStudentOrGroupComponent,
    TaskFullDescrTeacherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    HttpModule,
    MatBadgeModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AssignATaskComponent,
    TaskFullDescrTeacherComponent]
})
export class AppModule {
}
