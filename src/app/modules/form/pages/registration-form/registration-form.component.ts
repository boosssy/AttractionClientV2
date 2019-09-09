import { Component, OnInit } from '@angular/core';
import {User} from '../../../../core/model/User';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user: User;

  constructor() { }

  onSubmit() {

  }
  ngOnInit() {
  }

}
