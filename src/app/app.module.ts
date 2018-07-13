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
import {MatListModule} from '@angular/material/list';
import { TaskComponent } from './task/task.component';
import {MatCardModule} from '@angular/material/card';
import { FileApploadingComponent } from './file-apploading/file-apploading.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TaskSendingPageComponent } from './task-sending-page/task-sending-page.component';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutNavigationComponent,
    LayoutPersonalMenuComponent,
    LayoutFooterComponent,
    LayoutLandingPageComponent,
    TaskComponent,
    FileApploadingComponent,
    TaskSendingPageComponent,
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
    MatGridListModule,
    MatChipsModule,
    FormsModule,
    HttpModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
