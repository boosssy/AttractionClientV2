import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './layouts/content/content.component';
import {PageNotFoundComponent} from './modules/exceptions/pages/page-not-found/page-not-found.component';
import {SuccessfulOperationPageComponent} from './modules/exceptions/pages/successful-operation-page/successful-operation-page.component';
import {FailedOperationPageComponent} from './modules/exceptions/pages/failed-operation-page/failed-operation-page.component';
import {SuccessfulLoginComponent} from './modules/exceptions/pages/successful-login/successful-login.component';
import {LoginComponent} from './modules/form/pages/login-form/login.component';
// tslint:disable-next-line:max-line-length
import {OverviewAttractionsForAllComponent} from './modules/overview-attractions/pages/overview-attractions-for-all/overview-attractions-for-all.component';
import {RegistrationFormComponent} from './modules/form/pages/registration-form/registration-form.component';
import {ContactViewComponent} from './modules/contact/pages/contact-view/contact-view.component';
import {StartViewComponent} from "./modules/start/pages/start-view/start-view.component";
import {AboutUsViewComponent} from "./modules/about-us/pages/about-us-view/about-us-view.component";
import {LogoutComponent} from "./modules/form/pages/logout-form/logout.component";
import {AccountViewComponent} from "./modules/account/pages/account-view/account-view.component";
import {AttractionsInfoComponent} from "./modules/account/pages/account-view/attractions-info/attractions-info.component";
import {TransactionComponent} from "./modules/transaction/transaction.component";

const parentModuleRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'attractions-for-all',
        component: OverviewAttractionsForAllComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'account',
        component: AccountViewComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'registration',
        component: RegistrationFormComponent
      },
      {
        path: 'contact',
        component: ContactViewComponent
      },
      {
        path: 'start',
        component: StartViewComponent
      },
      {
        path: 'about-us',
        component: AboutUsViewComponent
      },
      {
        path: 'successful-login',
        component: SuccessfulLoginComponent
      },
      {
        path: 'failed',
        component: FailedOperationPageComponent
      },
      {
        path: 'successful',
        component: SuccessfulOperationPageComponent
      },
      {
        path: 'pageNotFound',
        component: PageNotFoundComponent
      },
      {
        path: 'information',
        component: AttractionsInfoComponent
      },
      {
        path: 'transaction',
        component: TransactionComponent
      },
      {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(parentModuleRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
