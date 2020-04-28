import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DatabaseApiService } from './database-api.service';

describe('DatabaseApiService', () => {
  let service: DatabaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DatabaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
