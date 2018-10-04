import { Profile } from './../../models/profile/profile.model';

import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  profileCollection: AngularFirestoreCollection<Profile>;
  profiles$: Observable<Profile[]>;

  constructor(private db: AngularFirestore) {
    this.profileCollection = db.collection('profiles');

    this.profiles$ = this.db.collection('profiles').snapshotChanges().pipe(map(change => {
        return change.map(a => {
          const data = a.payload.doc.data() as Profile;
          data.uid = a.payload.doc.id;

          return data;
        })
      })
    )
  }

  searchProfile(fullName: string): Observable<Profile[]> {
    return this.db.collection('profiles', ref => ref
      .where('fullName_insensitive', '==', fullName))
      .snapshotChanges()
      .pipe(map(change => {
        return change.map(a => {
          const data = a.payload.doc.data() as Profile;
          data.uid = a.payload.doc.id;

          return data;
        })
      })
    )
  }

  async verifyProfile(user: User) {
    return (await this.db.doc(`profiles/${user.uid}`).ref.get()).exists;
  }

  getUsers() {
    return this.profiles$;
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
