import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.model';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillEnter() {
    this.selectedProfile = this.navParams.get('profile');
  }

}
