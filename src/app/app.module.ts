import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { ContentComponent } from './layouts/content/content.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './modules/login/login.module';
import { TeacherNamePipe } from './core/pipes/teacher-name.pipe';
import { SortListPipe } from './core/pipes/sort-list.pipe';
import {ExceptionsModule} from './modules/exceptions/exceptions.module';
import {FormsModule} from "@angular/forms";
import {AboutUsForAllComponent} from "./modules/about-us/pages/about-us-for-all/about-us-for-all.component";
import {StartingViewForAllComponent} from "./modules/starting-view/pages/starting-view-for-all/starting-view-for-all.component";
import {OfferForAllComponent} from "./modules/offer/pages/offer-for-all/offer-for-all.component";
import {LoginComponent} from "./modules/login/login.component";
import {AuthServiceConfig, SocialLoginModule} from "angularx-social-login";
import { FacebookLoginProvider } from 'angularx-social-login';
import {AuthorizationsService} from './authorizations.service';
import {OverviewAttractionsModule} from "./modules/overview-attractions/overview-attractions.module";
import {StartingViewModule} from "./modules/starting-view/starting-view.module";
import {OverviewAttractionsForAllComponent} from './modules/overview-attractions/pages/overview-attractions-for-all/overview-attractions-for-all.component';

const facebookoauthclientid = '797209834027503';
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(facebookoauthclientid)
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    TeacherNamePipe,
    SortListPipe,
    AboutUsForAllComponent,
    StartingViewForAllComponent,
    OverviewAttractionsForAllComponent,
    OfferForAllComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    ExceptionsModule,
    StartingViewModule,
    OverviewAttractionsModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [
    AuthorizationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
