import { Profile } from './../../models/profile/profile.model';

import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class DataService {

  profileCollection: AngularFirestoreCollection<Profile>;

  constructor(private db: AngularFirestore) {
    this.profileCollection = db.collection('profiles');
  }

  async saveProfile(user: User, profile: Profile) {
    try {
      await this.db.doc(`profiles/${user.uid}`).set(profile);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

}
