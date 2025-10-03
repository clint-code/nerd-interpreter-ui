import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FooterAltComponent } from '../components/footer-alt/footer-alt.component';
import { BannerComponent } from '../components/banner/banner.component';
import { CharacterStatsComponent } from '../components/character-stats/character-stats.component';
import { MiniNavigationComponent } from '../components/mini-navigation/mini-navigation.component';
import { ComicSliderComponent } from '../components/comic-slider/comic-slider.component';
import { SingleCharacterCardComponent } from '../components/single-character-card/single-character-card.component';

@NgModule({

  declarations: [
    // HeaderComponent,
    // FooterAltComponent,
    // FooterComponent,
    //BannerComponent,
    // CharacterStatsComponent,
    // MiniNavigationComponent,
    // ComicSliderComponent,
    // SingleCharacterCardComponent
  ],

  imports: [
    HeaderComponent,
    FooterAltComponent,
    FooterComponent,
    BannerComponent,
    CharacterStatsComponent,
    MiniNavigationComponent,
    ComicSliderComponent,
    SingleCharacterCardComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    NgxMasonryModule
  ],

  exports: [
    RouterModule,
    CommonModule,
    // HeaderComponent,
    // FooterAltComponent,
    // FooterComponent,
    //BannerComponent,
    // CharacterStatsComponent,
    // MiniNavigationComponent,
    // ComicSliderComponent,
    // SingleCharacterCardComponent,
    NgxMasonryModule
  ]

})


export class SharedModule {

}