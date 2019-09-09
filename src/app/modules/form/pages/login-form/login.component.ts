import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import {NgForm} from '@angular/forms';
import {AuthorizationsService} from '../../../../core/sevice/authorizations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Angular Socio login via Facebook!';
  user: any;
  showButtonLoginFb = false;
  showButtonLogoutFb = true;
  hiddenButtonLoginFb = true;
  hiddenButtonLogoutFb = false;

  constructor(private socioAuthServ: AuthService, private authoService: AuthorizationsService) { }

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

  ngOnInit() {
  }

  login(formData: NgForm) {
      this.authoService.login(formData.value.email, formData.value.password);
  }

  signup(formData: NgForm) {
    this.authoService.signup(formData.value.email, formData.value.password);

  }


}
