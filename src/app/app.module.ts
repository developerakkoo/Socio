import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavdarComponent } from './Shared/navdar/navdar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ComponentComponent } from './component/component.component';
import { EventComponent } from './component/event/event.component';
import { FeedComponent } from './Feeds/feed/feed.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookArtistComponent } from './book-artist/book-artist.component';
import { CreateListingsComponent } from './create-listings/create-listings.component';
import { EventsComponent } from './Events/events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyBpdYZ_weFmkoOnWq5g5as4TSWvw2KeDuw",
  authDomain: "color-css.firebaseapp.com",
  databaseURL: "https://color-css.firebaseio.com",
  projectId: "color-css",
  storageBucket: "color-css.appspot.com",
  messagingSenderId: "426244092294",
  appId: "1:426244092294:web:20ea2d891dab56000c7c07"
};


@NgModule({
  declarations: [
    AppComponent,
    NavdarComponent,
    FooterComponent,
    ComponentComponent,
    LoginComponent,
    EventComponent,
    ContactUsComponent,
    BookArtistComponent,
    FeedComponent,
    CreateListingsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
