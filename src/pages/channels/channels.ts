import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, Loading } from 'ionic-angular';

import { Channel } from '../../models/channel/channel.model';
import { ChatService } from './../../providers/chat-service/chat-service';

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  constructor(private alertCtrl: AlertController,
              private chatService: ChatService,
              private loadingCtrl: LoadingController) { }


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

  // get loader(): Loading {
  //   return this.loadingCtrl.create({ spinner: 'crescent', content: 'Saving changes...' });
  // }

}
