import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayProfileComponent } from './components/display-profile/display-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WidgetsComponent } from './components/widgets/widgets.component';

@NgModule({
  declarations: [AppComponent, ListProfilesComponent, HomeComponent, DisplayProfileComponent, WidgetsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
