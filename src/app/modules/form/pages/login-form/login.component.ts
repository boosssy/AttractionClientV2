import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import {NgForm} from '@angular/forms';
import {AuthorizationsService} from '../../../../core/sevice/authorizations.service';
import {User} from '../../../../core/model/User';
import {MainSevice} from '../../../../core/sevice/MainSevice';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Angular Socio login via Facebook!';
  users: User[];
  tmpUser: User;
  user: any;
  showButtonLoginFb = false;
  showButtonLogoutFb = true;
  hiddenButtonLoginFb = true;
  hiddenButtonLogoutFb = false;

  constructor(private socioAuthServ: AuthService,
              private authoService: AuthorizationsService,
              private mainService: MainSevice) {
    this.tmpUser = new User();
  }

  signIn(platform: string): void {
    this.showButtonLoginFb = true;
    this.showButtonLogoutFb = false;
    this.hiddenButtonLoginFb = false;
    this.hiddenButtonLogoutFb = true;

    platform = FacebookLoginProvider.PROVIDER_ID;
    this.socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + ' logged in user data is= ', response);
        this.user = response;
      }
    );
  }

  // Method to log out.
  signOut(): void {
    this.showButtonLoginFb = false;
    this.showButtonLogoutFb = true;
    this.hiddenButtonLoginFb = true;
    this.hiddenButtonLogoutFb = false;
    this.socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

  login() {
      // this.authoService.login(formData.value.email, formData.value.password);
    let status = false;
    let i: number;
    for (i = 0; i < this.users.length; i++)  {
      if (this.tmpUser.userName === this.users[i].userName) {
        if (this.tmpUser.password === this.users[i].password) {
          status = true;
        }
      }
    }
    if (status) {
      location.assign('/successful-login');
    } else {
      location.assign('/failed');
    }
  }

  signup() {
    location.assign('/registration');
  }

  ngOnInit() {
    this.mainService.findAllUsers().subscribe( data => {
      this.users = data;
    });
  }

}
