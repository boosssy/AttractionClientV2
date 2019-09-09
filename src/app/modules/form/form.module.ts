import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './pages/login-form/login.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';

@NgModule({
  declarations: [LoginComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormModule { }
