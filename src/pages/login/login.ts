import { User } from 'firebase';
import { DataService } from './../../providers/data-service/data-service';
import { LoginResponse } from './../../models/login/login-response.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,
              private toast: ToastController,
              private dataService: DataService) {
  }

  async login(event: LoginResponse) {
    if (!event.error) {
      this.toast.create({ message: `Welcome to Beep, ${event.result.user.email}`, duration: 3000, position: 'middle' }).present();

      const user = <User>event.result.user;

      const profile = await this.dataService.verifyProfile(user);
      profile ?  this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage')

    } else {

      this.toast.create({ message: event.error.message, duration: 3000, position: 'middle' }).present();   
    }
  }
}
