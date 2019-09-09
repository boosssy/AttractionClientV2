import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { ContentComponent } from './layouts/content/content.component';
import {AppRoutingModule} from './app-routing.module';
import {FormModule} from './modules/forms/form.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './modules/login/login.module';
import { TeacherNamePipe } from './core/pipes/teacher-name.pipe';
import { SortListPipe } from './core/pipes/sort-list.pipe';
import {ExceptionsModule} from './modules/exceptions/exceptions.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    TeacherNamePipe,
    SortListPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormModule,
    LoginModule,
    AppRoutingModule,
    ExceptionsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
