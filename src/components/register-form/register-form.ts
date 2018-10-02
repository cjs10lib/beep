import { LoginResponse } from './../../models/login/login-response.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Account } from '../../models/account/account.model';
import { ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  @Output() loginStatus: EventEmitter<LoginResponse>;

  account = {}  as Account;

  constructor(private toast: ToastController, private auth: AngularFireAuth, private authService: AuthService) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    const result = await this.authService.createUserWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
  }

}
