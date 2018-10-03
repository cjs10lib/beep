import { DataService } from './../../providers/data-service/data-service';
import { AuthService } from './../../providers/auth-service/auth-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Profile } from '../../models/profile/profile.model';
import { Subscription } from 'rxjs';
import { Loading, LoadingController } from 'ionic-angular';

@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit, OnDestroy {

  userProfile = {} as Profile;

  loader: Loading;

  subscription$: Subscription;

  constructor(private authService: AuthService,
              private dataService: DataService,
              private loading: LoadingController) 
  {
    this.loader = this.loading.create({ spinner: 'crescent', content: 'Loading profile...' });
  }

  ngOnInit(): void {
    this.loader.present();
    
    this.subscription$ = this.authService.getAuthenticatedUser().subscribe(user => {
      this.dataService.getProfile(user).subscribe(profile => {
        this.userProfile = profile;
        this.loader.dismiss();
        console.log(profile);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

}