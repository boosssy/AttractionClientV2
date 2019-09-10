import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './pages/login-form/login.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { LogoutComponent } from './pages/logout-form/logout.component';

@NgModule({
  declarations: [LoginComponent, RegistrationFormComponent, LogoutComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormModule { }
