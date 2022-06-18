import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterAltComponent } from './components/footer-alt/footer-alt.component';
import { BannerComponent } from './components/banner/banner.component';
import { CharacterStatsComponent } from './components/character-stats/character-stats.component';
import { MiniNavigationComponent } from './components/mini-navigation/mini-navigation.component';
import { ComicSliderComponent } from './components/comic-slider/comic-slider.component';
import { SingleCharacterCardComponent } from './components/single-character-card/single-character-card.component';
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
    HeaderComponent,
    FooterComponent,
    FooterAltComponent,
    BannerComponent,
    CharacterStatsComponent,
    MiniNavigationComponent,
    ComicSliderComponent,
    SingleCharacterCardComponent,
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
