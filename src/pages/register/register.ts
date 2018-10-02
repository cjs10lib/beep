import { LoginResponse } from './../../models/login/login-response.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private navCtrl: NavController,
              private toast: ToastController) { }

  register(event: LoginResponse) {
    if (!event.error) {
      this.toast.create({ message: `Welcome to Beep ${event.result.user.email}`, duration: 3000, position: 'middle' }).present();
      this.navCtrl.setRoot('ProfilePage');
    } else {
      this.toast.create({ message: event.error.message, duration: 3000, position: 'middle' }).present();
    }
  }

}
