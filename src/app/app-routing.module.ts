import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { FeedComponent } from './Feeds/feed/feed.component';
import{ContactUsComponent} from './contact-us/contact-us.component';
// import { LoginComponent } from './auth/login/login.component';
import { BookArtistComponent } from './book-artist/book-artist.component';
import { CreateListingsComponent } from './create-listings/create-listings.component';
import { EventsComponent } from './Events/events/events.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'home',component:ComponentComponent 
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'feed',component:FeedComponent
  },
  
  {
    path:'book-artist',component:BookArtistComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'create-listings',component:CreateListingsComponent
  },
  {
    path:'events',component:EventsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
