import { Component, ViewChild, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

//import { CharacterdataService } from '../../services/characterdata.service';

import { ContentManagementService } from '../../services/content-management.service';

import $ from 'jquery';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export interface characterInfo {
  id: number;
  title: string;
  category: string;
  characterImage: string;
  alt: string;
}

interface characterStore {
  cached?: characterInfo[];
  refined?: characterInfo[];
}

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrls: ['./marvel-characters.component.css'],
  providers: [
    //CharacterdataService
  ]
})
export class MarvelCharactersComponent implements OnInit {

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];

  selection: string;
  reset: string;
  charactersData: any;
  characterStore: characterStore = {};

  options: NgxMasonryOptions = {

    itemSelector: '.character-item',
    gutter: 10,
    transitionDuration: '1.2s',
    horizontalOrder: true,
    //fitWidth: true,
    //percentPosition: true,
    columnWidth: 20,
    resize: true
  };

  @ViewChild(NgxMasonryComponent, { static: false })

  masonry: NgxMasonryComponent;

  constructor(
    //private characterDataService: CharacterdataService,
    private contentService: ContentManagementService,
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle("The Nerd Interpreter - Marvel Characters");

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'Marvel Characters, DC Characters, DC, Marvel, Heroes, Villains'
      }
    );

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Marvel comic book heroes and villains'
      }
    );

    $('html, body').animate({
      scrollTop: $(".content-section").offset({
        top: 50
      })
    }, 500);

    this.getMarvelCharactersData();

    $(".filterButton").click(this.toggleFilter);

  }

  ngAfterViewInit(): void {

    this.siteImages = Preloader.getImages();

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

      this.fadeInUp();

      this.fadeInLeft();

    }, 1000);

  }

  getMarvelCharactersData() {

    // this.characterDataService.getAllMarvelCharactersListingJSON().subscribe((response: any[]) => {

    //   this.charactersData = response;

    //   this.characterStore.cached = response;

    //   this.characterStore.refined = this.charactersData.sort((firstCharacter, secondCharacter) => firstCharacter.id = secondCharacter.id);

    // });

    this.contentService.getAllMarvelCharacters().subscribe((response: any[]) => {

      this.charactersData = response;

      console.log("Data:", this.charactersData);

      this.characterStore.cached = response;

      this.characterStore.refined = this.charactersData.sort((firstCharacter, secondCharacter) => firstCharacter.id = secondCharacter.id);

    });

  }

  fadeInUp() {

    const scrollBox = gsap.timeline({

      scrollTrigger: {
        trigger: '.text-intro-section',
        toggleActions: 'restart none none none'
      }
    });

    scrollBox.from('.text-intro-section', {
      opacity: 0,
      y: 100,
      duration: 2
    });

  }

  toggleFilter() {

    if ($(this).hasClass("is-checked")) {

      $(".filterButton").removeClass("is-checked");
      $(this).removeClass("is-checked");

    } else {

      $(".filterButton").removeClass("is-checked");
      $(this).addClass("is-checked");

    }

  }

  filterCharacters(category) {

    this.characterStore.refined = this.charactersData.filter(
      (character) => character.acf.character_alignment == category || category == 'all'
    );

    this.masonry.reloadItems();

  }

  fadeInLeft() {

    const scrollBox = gsap.timeline({

      scrollTrigger: {
        trigger: '.more-cnt-section',
        start: 'top center',
        toggleActions: 'restart none none none'
      }
    });

    scrollBox.from('.more-cnt-section', {
      opacity: 0,
      x: -100,
      duration: 2
    });

  }

}
