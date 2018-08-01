import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskModule } from './Routing/task/task.module';
import { LayoutModule } from './layout-landing-page/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './home-page/home-page.module';
import { RegistrationAuthorizationModule } from './registration-authorization/registration-authorization.module';
import { EditPasswordModule } from './edit-password/edit-password.module';
import { PersonalMenuModule } from './Routing/personal-menu/personal-menu.module';
<<<<<<< HEAD
import { TestStatisticsTestsPageAdminModule } from './test-statistics-tests-page-admin/test-statistics-tests-page-admin.module';
import { TestPassingPageModule } from './test-passing-page/test-passing-page.module';
=======
import { TestModule } from './Routing/test/test.module';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TaskModule,
    HttpClientModule,
    LayoutModule,
    HttpClientModule,
    HomePageModule,
    RegistrationAuthorizationModule,
    EditPasswordModule,
    PersonalMenuModule,
<<<<<<< HEAD
    AllStudentsAdminPageModule,
    TestStatisticsTestsPageAdminModule,
    TestPassingPageModule
=======
    TestModule
>>>>>>> master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
