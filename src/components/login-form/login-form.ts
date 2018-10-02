import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Account } from '../../models/account/account.model';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginResponse } from './../../models/login/login-response.model';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  @Output() loginStatus: EventEmitter<LoginResponse>;
  account = {} as Account;

  constructor(private navCtrl: NavController, private authService: AuthService) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    const result = await this.authService.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

}
