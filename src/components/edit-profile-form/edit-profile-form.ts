import { Profile } from './../../models/profile/profile.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent {

  profile = {} as Profile;

  constructor() { }

  saveProfile() {
    console.log(this.profile)
  }

}
