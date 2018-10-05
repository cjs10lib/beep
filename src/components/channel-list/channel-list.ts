import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../providers/chat-service/chat-service';
import { LoadingController, Loading } from 'ionic-angular';
import { Channel } from '../../models/channel/channel.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-channel-list',
  templateUrl: 'channel-list.html'
})
export class ChannelListComponent implements OnInit, OnDestroy {

  channels: Channel[] = [];

  subscription$: Subscription;

  constructor(private chatService: ChatService,
              private loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    const loader: Loading = this.loadingCtrl.create({ spinner: 'crescent', content: 'Loading channels...' });
    loader.present();

    this.subscription$ = this.chatService.getChannels().subscribe(channels => {
      this.channels = channels;
      loader.dismiss();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

}
