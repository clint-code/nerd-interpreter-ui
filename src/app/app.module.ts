import { BrowserModule, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

//View Imports
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { MarvelCharactersComponent } from './views/marvel-characters/marvel-characters.component';
import { DcCharactersComponent } from './views/dc-characters/dc-characters.component';
import { HeroesJourneyComponent } from './views/heroes-journey/heroes-journey.component';
import { SingleCharacterComponent } from './views/single-character/single-character.component';
import { SingleHeroJourneyComponent } from './views/single-hero-journey/single-hero-journey.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MarvelCharactersComponent,
    DcCharactersComponent,
    HeroesJourneyComponent,
    SingleCharacterComponent,
    SingleHeroJourneyComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
