import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription, Observable } from 'rxjs';

import { ChannelMessage } from '../../models/channel/channel-message.model';
import { ChatService } from '../../providers/chat-service/chat-service';
import { Channel } from './../../models/channel/channel.model';
import { AuthService } from './../../providers/auth-service/auth-service';
import { DataService } from './../../providers/data-service/data-service';
import { Profile } from '../../models/profile/profile.model';

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel = {} as Channel;
  userProfile = {} as Profile;

  channelMessages$: Observable<ChannelMessage[]>;

  subscription$: Subscription;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private dataService: DataService,
              private authService: AuthService,
              private chatService: ChatService) { }

  ionViewWillEnter() {
    this.channel = this.navParams.get('channel');

    this.subscription$ = this.authService.getAuthenticatedUser().subscribe(user => {
      this.userProfile.uid = user.uid;
    });

    // get channel chat messages
    this.getChatMessages();
  }

  ionViewWillLeave() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  async sendMessage(channelMessage: ChannelMessage) {
    const message: ChannelMessage = {
      channel: this.channel.uid,
      content: channelMessage.content,
      user: this.userProfile,
      created: new Date(),
    }

    await this.chatService.sendChannelChatMessage(message);
  }

  private getChatMessages() {
    this.channelMessages$ = this.chatService.getChannelMesssages(this.channel.uid);
  }

}
