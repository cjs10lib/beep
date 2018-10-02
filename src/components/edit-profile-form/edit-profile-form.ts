
import { AuthService } from './../../providers/auth-service/auth-service';
import { DataService } from './../../providers/data-service/data-service';
import { Profile } from './../../models/profile/profile.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'firebase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  profile = {} as Profile;
  authenticatedUser: User;

  subscription$: Subscription;

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription$ = this.authService.getAuthenticatedUser().subscribe(user => {
      this.authenticatedUser = user;
      console.log(user)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      
      await this.dataService.saveProfile(this.authenticatedUser, this.profile);
    }
  }

}
