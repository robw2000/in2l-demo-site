import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import {Widget} from '../models/widget';

const API_HOST = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {
  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${API_HOST}/api/profiles`);
  }

  getProfile(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${API_HOST}/api/profiles/` + id);
  }

  getWidgets(name?: string): Observable<Widget[]> {
    if (name) {
      return this.http.get<Widget[]>(`${API_HOST}/api/widgets/` + name);
    }
    return this.http.get<Widget[]>(`${API_HOST}/api/widgets`);
  }
}
