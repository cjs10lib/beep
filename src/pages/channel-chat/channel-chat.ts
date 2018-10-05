import { Channel } from './../../models/channel/channel.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel = {} as Channel;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillEnter() {
    this.channel = this.navParams.get('channel');
  }

}
