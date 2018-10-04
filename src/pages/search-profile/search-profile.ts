import { Profile } from './../../models/profile/profile.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-profile',
  templateUrl: 'search-profile.html',
})
export class SearchProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openChat(profile: Profile) {
    this.navCtrl.push('MessagePage', { profile: profile });
  }

}
