
import { AuthService } from './../../providers/auth-service/auth-service';
import { DataService } from './../../providers/data-service/data-service';
import { Profile } from './../../models/profile/profile.model';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'firebase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  @Output() saveProfileResult: EventEmitter<Boolean>;

  @Input() profile: Profile;
  authenticatedUser: User;

  subscription$: Subscription;

  constructor(private dataService: DataService, private authService: AuthService) {
    this.saveProfileResult = new EventEmitter<Boolean>();
  }

  ngOnInit(): void {
    if (!this.profile) {
      this.profile = {} as Profile;
    }

    this.subscription$ = this.authService.getAuthenticatedUser().subscribe(user => {
      this.authenticatedUser = user;
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
      this.profile.fullName = this.profile.firstName + ' ' + this.profile.lastName;
      
      const result = await this.dataService.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

}
