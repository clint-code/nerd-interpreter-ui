import { Component, ViewChild, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import $ from 'jquery';

import { ContentManagementService } from '../../services/content-management.service';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export interface characterInfo {
  id: number;
  title: string;
  character_alignment: string;
  characterImage: string;
  alt: string;
}

interface characterStore {
  cached?: characterInfo[];
  refined?: characterInfo[];
}

@Component({
  selector: 'app-dc-characters',
  templateUrl: './dc-characters.component.html',
  styleUrls: ['./dc-characters.component.css'],
  providers: [
    //CharacterdataService
  ]
})

export class DcCharactersComponent implements OnInit {

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];

  selection: string;
  reset: string;
  charactersData: any;
  characterStore: characterStore = {};
  characterAlignment: string = "";

  dcBannerIntroContent: any;

  //Masonry configurations
  updateMasonryLayout: boolean = false;

  options: NgxMasonryOptions = {
    gutter: 10,
    //horizontalOrder: true,
    fitWidth: false,
    percentPosition: true,
    columnWidth: '.grid-sizer',
    itemSelector: '.character-item',
    //originLeft: false,
    resize: true
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  constructor(
    private contentService: ContentManagementService,
    private titleService: Title,
    private metaService: Meta,
  ) {

  }

  ngOnInit(): void {

    this.loadingView = true;

    this.titleService.setTitle("The Nerd Interpreter - DC Characters");

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'Marvel Characters, DC Characters, DC, Marvel, Heroes, Villains'
      }
    );

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'DC comic book heroes and villains'
      }
    );

    $('html, body').animate({
      scrollTop: $(".content-section").offset({
        top: 50
      })
    }, 500);

    this.getDcBannerIntroData();

    this.getDcCharactersData();

    $(".filterButton").click(this.toggleFilter);

  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

      this.fadeInUp();

      this.fadeInLeft();

    }, 1000);

  }

  filterCharacters(category) {

    this.characterStore.refined = this.charactersData.filter(
      (character) => character.acf.character_alignment == category || category == 'all'
    );

    setTimeout(() => {
      this.masonry.layout();
      this.masonry.reloadItems();
    }, 100);

  }

  getDcCharactersData() {

    this.contentService.getAllCharacters().subscribe((response: any[]) => {

      console.log(response);

      if (response !== null) {

        this.charactersData = response;

        this.characterStore.cached = response;

        this.characterStore.refined = this.charactersData.sort((firstCharacter, secondCharacter) => firstCharacter.id = secondCharacter.id);

      }

    });

  }

  getDcBannerIntroData() {

    this.contentService.getContentByPageSlug("dc-characters").subscribe(response => {

      if (response !== "" || response !== null) {

        this.dcBannerIntroContent = response[0];

      }

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
