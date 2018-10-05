import { ChannelMessage } from './../../models/channel/channel-message.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Channel } from '../../models/channel/channel.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatService {

  private channelCollection: AngularFirestoreCollection<Channel>;
  private channels$: Observable<Channel[]>;

  constructor(private db: AngularFirestore) {
    this.channelCollection = db.collection('channel-names');

    this.channels$ = this.channelCollection.snapshotChanges().pipe(
      map(change => {
        return change.map(a => {
          const data = a.payload.doc.data() as Channel;
          data.uid = a.payload.doc.id;

          return data;
        });
      })
    );
  }
  
  async verifyChannel(channel: Channel) {
    return (await this.db.doc(`channel-names/${channel.name.toLowerCase()}`).ref.get()).exists;
  }

  getChannels() {
    return this.channels$;
  }

  getChannelMesssages(channel: string): Observable<ChannelMessage[]> {
    return this.db.collection('channels', ref => ref.where('channel', '==', channel).orderBy('created')).valueChanges();
  }

  async addChannel(channel: Channel) {
    const channelExist = await this.verifyChannel(channel);
    if (!channelExist) {
      return await this.db.doc(`channel-names/${channel.name}`).set(channel);
    }

    // else
    return 'Sorry! ' + channel.name + ' is not available. Try another channel name.';
  }

  async sendChannelChatMessage(message: ChannelMessage) {
    return await this.db.collection('channels').add(message);
  }

}


