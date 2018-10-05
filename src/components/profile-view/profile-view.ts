import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs';

import { Profile } from '../../models/profile/profile.model';
import { AuthService } from './../../providers/auth-service/auth-service';
import { DataService } from './../../providers/data-service/data-service';

@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {

  @Output() existingProfile: EventEmitter<Profile>;

  userProfile = {} as Profile;

  loader: Loading;

  subscription$: Subscription;

  constructor(private authService: AuthService,
              private dataService: DataService,
              private loadingCtrl: LoadingController) 
  {
    this.existingProfile = new EventEmitter<Profile>();
    
    this.loader = this.loadingCtrl.create({ spinner: 'crescent', content: 'Loading profile...' });
  }

  ngOnInit(): void {
    this.loader.present();
    
    this.authService.getAuthenticatedUser().subscribe(user => {
      if (user) {
        this.dataService.getAuthenticatedUserProfile().subscribe(profile => {
          this.userProfile = profile;
          this.existingProfile.emit(profile);
          
          this.loader.dismiss();
        });

      }
    });
  }

  signOut() {
    this.authService.signOut();
  }

}
