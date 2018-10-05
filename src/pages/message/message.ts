import { MESSAGE_LIST } from './../../mocks/messages/messages.mock';
import { Message } from './../../models/messages/message.model';
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
  messages: Message[];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillEnter() {
    this.messages = MESSAGE_LIST;
    this.selectedProfile = this.navParams.get('profile');
  }

}
