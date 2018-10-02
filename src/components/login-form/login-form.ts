import { LoginResponse } from './../../models/login/login-response.model';
import { NavController } from 'ionic-angular';
import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Account } from '../../models/account/account.model';
import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
