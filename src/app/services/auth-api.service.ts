import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_HOST = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  getToken(inputs: object): Observable<string> {
    return this.http.post(`${API_HOST}/api/auth/login`, inputs, { responseType: 'text'});
  }
}
