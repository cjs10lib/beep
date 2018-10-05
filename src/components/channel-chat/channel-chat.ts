import { ChannelMessage } from './../../models/channel/channel-message.model';
import { Component, Input } from '@angular/core';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-channel-chat',
  templateUrl: 'channel-chat.html'
})
export class ChannelChatComponent {

  @Input() chatMessage: ChannelMessage;

  constructor() { }

  ngOnInit(): void {
    if (!this.chatMessage) {
      this.chatMessage = {} as ChannelMessage;
    }
    console.log(this.chatMessage);
  }

  convertTimestampToDate() {
    const timestamp = new firestore.Timestamp(this.chatMessage.created['seconds'], this.chatMessage.created['nanoseconds']);
    return timestamp.toDate();
  }

}
