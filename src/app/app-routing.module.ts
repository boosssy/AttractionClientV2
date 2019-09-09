import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './layouts/content/content.component';
import {FormComponent} from './modules/forms/form.component';
import {LoginFormComponent} from './modules/login/pages/login-form/login-form.component';
import {LogoutComponent} from './modules/login/pages/logout/logout.component';
import {PageNotFoundComponent} from './modules/exceptions/pages/page-not-found/page-not-found.component';
import {SuccessfulOperationPageComponent} from './modules/exceptions/pages/successful-operation-page/successful-operation-page.component';
import {FailedOperationPageComponent} from './modules/exceptions/pages/failed-operation-page/failed-operation-page.component';
import {SuccessfulLoginComponent} from './modules/exceptions/pages/successful-login/successful-login.component';
const parentModuleRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
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
        path: 'form',
        component: FormComponent,
        children: [
          {
            // przykladowy component
            path: 'add-lesson',
            component: LoginFormComponent
          }
        ]
      },
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
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
