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
import { MatTabsModule } from '@angular/material/tabs';
import { AllTasksTeacherComponent } from './all-tasks-teacher/all-tasks-teacher.component';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { TableMyTasksTeacherComponent } from './table-my-tasks-teacher/table-my-tasks-teacher.component';
import { TaskFullDescrTeacherComponent } from './task-full-descr-teacher/task-full-descr-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutNavigationComponent,
    LayoutPersonalMenuComponent,
    LayoutFooterComponent,
    LayoutLandingPageComponent,
    AllTasksTeacherComponent,
    TableMyTasksTeacherComponent,
    TableMyTasksTeacherComponent,
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
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TaskFullDescrTeacherComponent]
})
export class AppModule {
}
