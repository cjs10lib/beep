import { Subscription } from 'rxjs';
import { Profile } from './../../models/profile/profile.model';
import { DataService } from './../../providers/data-service/data-service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent implements OnInit, OnDestroy {

  profile = [] as Profile[];
  filteredProfile = [] as Profile[];

  query: string;

  subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.getUsers().subscribe(users => {
      this.profile = users;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  _filterProfile(query: string) {
    this.filteredProfile = query ? this.profile.filter(p => p.fullName.toLowerCase().includes(query.toLowerCase())) : [];
  }

}
