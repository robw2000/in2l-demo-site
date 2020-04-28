import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from 'src/app/services/database-api.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.scss']
})
export class ListProfilesComponent implements OnInit {
  profiles: Profile[];
  displayedColumns: string[] = ['userId', 'firstName', 'lastName'];
  dataSource: Profile[];

  constructor(private databaseApiService: DatabaseApiService) {}

  ngOnInit(): void {
    this.databaseApiService.getAllProfiles().subscribe(profiles => {
      this.dataSource = profiles || [];
    });
  }
}
