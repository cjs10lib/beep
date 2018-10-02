import { LoginResponse } from './../../models/login/login-response.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private toast: ToastController) {
  }

  login(event: LoginResponse) {
    if (!event.error) {
      this.toast.create({ message: `Welcome to Beep, ${event.result.user.email}`, duration: 3000, position: 'middle' }).present();
      this.navCtrl.setRoot('ProfilePage');
    } else {
      this.toast.create({ message: event.error.message, duration: 3000, position: 'middle' }).present(); ;    
    }
    
      // pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }
}
