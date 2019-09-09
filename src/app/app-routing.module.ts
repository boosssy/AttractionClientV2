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

const parentModuleRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      // {
      //   path: 'home',
      //   component: PageNotFoundComponent
      // },
      // {
      //   path: 'offer',
      //   component: PageNotFoundComponent
      // },
      {
        path: 'attractions-for-all',
        component: OverviewAttractionsForAllComponent
      },
      // {
      //   path: 'contact',
      //   component: PageNotFoundComponent
      // },
      // {
      //   path: 'about-us',
      //   component: PageNotFoundComponent
      // },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationFormComponent
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
