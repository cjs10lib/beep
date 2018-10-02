import { LoginResponse } from './../../models/login/login-response.model';
import { NavController } from 'ionic-angular';
import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Account } from '../../models/account/account.model';

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

  constructor(private navCtrl: NavController, private auth: AngularFireAuth) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async navigateToPage(pageName: string) {
    try {
      const result: LoginResponse = {
        result: await this.auth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result);
    } catch (e) {
      const error: LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
    }
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

}
