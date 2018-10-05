import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { Channel } from '../../models/channel/channel.model';

@Component({
  selector: 'app-channel-list',
  templateUrl: 'channel-list.html'
})
export class ChannelListComponent {

  @Output() selectedChannel: EventEmitter<Channel>;

  @Input() channel: Channel;

  subscription$: Subscription;

  constructor() {
    this.selectedChannel = new EventEmitter<Channel>();
  }

  selectChannel(channel: Channel) {
    this.selectedChannel.emit(channel);
  }

}
