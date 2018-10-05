import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, Loading, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs';

import { Channel } from './../../models/channel/channel.model';
import { ChatService } from './../../providers/chat-service/chat-service';

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channels: Channel[] = [];

  subscription$: Subscription;

  constructor(private alertCtrl: AlertController,
              private chatService: ChatService,
              private navCtrl: NavController,
              private loadingCtrl: LoadingController) { }

  ionViewWillEnter() {
    const loader: Loading = this.loadingCtrl.create({ spinner: 'crescent', content: 'Loading channels...' });
    loader.present();

    this.subscription$ = this.chatService.getChannels().subscribe(channels => {
      this.channels = channels;
      loader.dismiss();
    });
  }

  ionViewWillLeave() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  selectedChannel(channel: Channel) {
    console.log(channel);
    this.navCtrl.push('ChannelChatPage', { channel: channel });
  }
 
  showAddChannelDialog() {
    const prompt = this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'name'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: (data: Channel) => {
            if (!data) { return; }

            data.created = data.lastUpdate = new Date();
            this.chatService.addChannel(data).then(response => {
              if (response) {
                this.responseAlert(response);
              }
            });
          }
        }
      ]
    });

    prompt.present();
  }

  responseAlert(response) {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: response,
      buttons: ['OK']
    });

    alert.present();
  }

}
