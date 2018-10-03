import { Profile } from './../../models/profile/profile.model';

import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  profileCollection: AngularFirestoreCollection<Profile>;

  constructor(private db: AngularFirestore) {
    this.profileCollection = db.collection('profiles');
  }

  async verifyProfile(user: User) {
    return (await this.db.doc(`profiles/${user.uid}`).ref.get()).exists;
  }

  getProfile(user: User): Observable<Profile> {
    return this.profileCollection.doc(user.uid).valueChanges().pipe(take(1));
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
