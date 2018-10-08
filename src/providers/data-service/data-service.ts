import { AuthService } from './../auth-service/auth-service';
import { Profile } from './../../models/profile/profile.model';

import { Injectable } from '@angular/core';
import { User, auth } from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  profileCollection: AngularFirestoreCollection<Profile>;
  profiles$: Observable<Profile[]>;

  constructor(private db: AngularFirestore, private authService: AuthService) {
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

  getProfiles() {
    return this.profiles$;
  }

  getAuthenticatedUserProfile() {
    return this.authService.getAuthenticatedUser().pipe(
      map(auth => auth.uid),
      mergeMap(authId => this.db.doc(`profiles/${authId}`).valueChanges()),
      take(1)
    );
  }

  getProfile(profileId: string): Observable<Profile> {
    return this.profileCollection.doc(profileId).valueChanges().pipe(take(1));
  }

  async saveProfile(user: User, profile: Profile) {
    try {
      await this.db.doc(`profiles/${user.uid}`).set(profile);
      return true;
    } catch (e) {
      return false;
    }
  }

}
