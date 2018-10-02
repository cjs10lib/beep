import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Account } from '../../models/account/account.model';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {}  as Account;

  constructor(private toast: ToastController, private auth: AngularFireAuth) { }

  async register() {
    try {
      await this.auth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toast.create({ message: 'Account sucessfully created', duration: 3000, position: 'middle' }).present(); 
    } catch (e) {
      console.error(e);
      this.toast.create({ message: e.message, duration: 3000, position: 'middle' }).present();
    }
  }

}
