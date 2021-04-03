import { Component, OnInit } from '@angular/core';
import {Profile} from '../../models/profile';
import {DatabaseApiService} from '../../services/database-api.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-search',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss']
})
export class DisplayProfileComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'firstName', 'lastName'];
  profile: Profile;
  loaded = false;

  constructor(
    private location: Location,
    private service: DatabaseApiService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.service.getProfile(id).toPromise().then(profile => {
      this.profile = profile;
    });
    this.loaded = true;
  }

  back(): void {
    this.location.back();
  }
}
