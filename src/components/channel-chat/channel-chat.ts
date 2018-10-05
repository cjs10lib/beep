import { Subscription } from 'rxjs';
import { Profile } from './../../models/profile/profile.model';
import { DataService } from './../../providers/data-service/data-service';
import { ChannelMessage } from './../../models/channel/channel-message.model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { firestore, User } from 'firebase/app';

@Component({
  selector: 'app-channel-chat',
  templateUrl: 'channel-chat.html'
})
export class ChannelChatComponent implements OnInit, OnDestroy {

  @Input() chatMessage: ChannelMessage;

  userProfile = {} as Profile;

  subscription$: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if (!this.chatMessage) {
      this.chatMessage = {} as ChannelMessage;
    }

    if (this.chatMessage) {
      this.subscription$ = this.dataService.getProfile(<User>this.chatMessage.user).subscribe(profile => {
        this.userProfile = profile;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  convertTimestampToDate() {
    const timestamp = new firestore.Timestamp(this.chatMessage.created['seconds'], this.chatMessage.created['nanoseconds']);
    return timestamp.toDate();
  }

}
