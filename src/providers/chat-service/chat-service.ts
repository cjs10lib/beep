import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Channel } from '../../models/channel/channel.model';

@Injectable()
export class ChatService {

  channelCollection: AngularFirestoreCollection<Channel>;

  constructor(private db: AngularFirestore) {
    this.channelCollection = db.collection('channel-names');
  }
  
  async verifyChannel(channel: Channel) {
    return (await this.db.doc(`channel-names/${channel.name}`).ref.get()).exists;
  }

  async addChannel(channel: Channel) {
    const channelExist = await this.verifyChannel(channel);
    if (!channelExist) {
      return await this.db.doc(`channel-names/${channel.name}`).set(channel);
    }

    // else
    return 'Sorry! ' + channel.name + ' is not available. Try another channel name.';
  }

}


