import { ChannelMessage } from './../../models/channel/channel-message.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.html'
})
export class SendMessageBoxComponent {

  @Output() sendMessage: EventEmitter<ChannelMessage>;
  message = {} as ChannelMessage;

  constructor() {
    this.sendMessage = new EventEmitter<ChannelMessage>();
  }

  send() {
    if (this.message.content) {
      this.sendMessage.emit(this.message);
      this.message.content = "";
    }
  }

}
