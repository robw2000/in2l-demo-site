import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

const API_HOST = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {
  constructor(private http: HttpClient) {}

  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${API_HOST}/api/profiles`, {withCredentials: true});
  }
}
