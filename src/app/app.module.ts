import { BrowserModule, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { CarouselModule } from 'ngx-owl-carousel-o';

//View Imports
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { MarvelCharactersComponent } from './views/marvel-characters/marvel-characters.component';
import { DcCharactersComponent } from './views/dc-characters/dc-characters.component';
import { SingleCharacterComponent } from './views/single-character/single-character.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { EmailsubscriptionComponent } from './components/emailsubscription/emailsubscription.component';
import { ProgressOnscrollbarComponent } from './components/progress-onscrollbar/progress-onscrollbar.component';
import { SuperheroesSaintsComponent } from './views/superheroes-saints/superheroes-saints.component';
import { SingleSuperheroSaintViewComponent } from './views/single-superhero-saint-view/single-superhero-saint-view.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MarvelCharactersComponent,
    DcCharactersComponent,
    SingleCharacterComponent,
    PreloaderComponent,
    EmailsubscriptionComponent,
    ProgressOnscrollbarComponent,
    SuperheroesSaintsComponent,
    SingleSuperheroSaintViewComponent,
  ],
  providers: [
    Title
  ],
  bootstrap: []
})
export class AppModule { }
