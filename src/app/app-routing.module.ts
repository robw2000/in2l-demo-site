import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { ShowProfileComponent } from './components/show-profile/show-profile.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profiles',
    component: ListProfilesComponent
  },
  {
    path: 'profiles/:profileId',
    component: ShowProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
