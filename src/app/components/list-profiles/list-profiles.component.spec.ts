import {
  TestBed,
  ComponentFixture,
  async,
  inject
} from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ListProfilesComponent } from './list-profiles.component';

describe('ListProfilesComponent', () => {
  let component: ListProfilesComponent;
  let fixture: ComponentFixture<ListProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListProfilesComponent],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
    TestBed.configureTestingModule({}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
