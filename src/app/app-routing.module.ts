import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './layouts/content/content.component';
import {PageNotFoundComponent} from './modules/exceptions/pages/page-not-found/page-not-found.component';
import {SuccessfulOperationPageComponent} from './modules/exceptions/pages/successful-operation-page/successful-operation-page.component';
import {FailedOperationPageComponent} from './modules/exceptions/pages/failed-operation-page/failed-operation-page.component';
import {SuccessfulLoginComponent} from './modules/exceptions/pages/successful-login/successful-login.component';
import {StartingViewForAllComponent} from "./modules/starting-view/pages/starting-view-for-all/starting-view-for-all.component";
import {OfferForAllComponent} from "./modules/offer/pages/offer-for-all/offer-for-all.component";
import {ContactForAllComponent} from "./modules/contact/pages/contact-for-all/contact-for-all.component";
import {AboutUsForAllComponent} from "./modules/about-us/pages/about-us-for-all/about-us-for-all.component";
import {LoginComponent} from "./modules/login/login.component";
const parentModuleRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'home',
        component: StartingViewForAllComponent
      },
      {
        path: 'offer',
        component: OfferForAllComponent
      },
      // {
      //   path: 'attractions',
      //   component: OverviewAttractionsForAllComponent
      // },
      {
        path: 'contact',
        component: ContactForAllComponent
      },
      {
        path: 'about-us',
        component: AboutUsForAllComponent
      },
      {
        path: 'login',
        component: LoginComponent
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
