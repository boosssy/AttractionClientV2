import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { ContentComponent } from './layouts/content/content.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormModule} from './modules/form/form.module';
import {ExceptionsModule} from './modules/exceptions/exceptions.module';
import {FormsModule} from '@angular/forms';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import {AuthorizationsService} from './core/sevice/authorizations.service';
import {OverviewAttractionsModule} from './modules/overview-attractions/overview-attractions.module';

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
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FormModule,
    AppRoutingModule,
    ExceptionsModule,
    OverviewAttractionsModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [
    AuthorizationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
