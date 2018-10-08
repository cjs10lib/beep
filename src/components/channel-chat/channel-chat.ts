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

  @Input() chatMessage = {} as ChannelMessage;
  @Input() userProfile = {} as Profile;

  alignUserChatTo_right: boolean;

  messageSenderProfile = {} as Profile;

  subscription$: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    
    if (this.chatMessage.user.uid === this.userProfile.uid) {
      console.log(this.userProfile);
      this.alignUserChatTo_right = true;
    }

    
    if (this.chatMessage) {
      this.subscription$ = this.dataService.getProfile(this.chatMessage.user.uid).subscribe(profile => {
        this.messageSenderProfile = profile;
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
