import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { HomeComponent } from './components/home/home.component';
import {DisplayProfileComponent} from './components/display-profile/display-profile.component';
import {WidgetsComponent} from './components/widgets/widgets.component';

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
    path: 'profile/:id',
    component: DisplayProfileComponent
  },
  {
    path: 'widgets',
    component: WidgetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
