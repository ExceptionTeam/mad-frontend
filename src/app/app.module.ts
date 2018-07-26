import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskModule } from './task/task.module';
import { LayoutModule } from './layout-landing-page/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationPageModule } from './registration-page/registration-page.module';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TaskModule,
    HttpClientModule,
    LayoutModule,
    HttpClientModule,
    RegistrationPageModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
