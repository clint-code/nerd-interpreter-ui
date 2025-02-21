import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

import { Title, Meta } from '@angular/platform-browser';

import { ContentManagementService } from '../../services/content-management.service';

import $ from 'jquery';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export interface characterInfo {
  id: number;
  characterImage: string;
  alt: string;
}

interface characterStore {
  cached?: characterInfo[];
  refined?: characterInfo[];
}

@Component({
  selector: 'app-superheroes-saints',
  templateUrl: './superheroes-saints.component.html',
  styleUrls: ['./superheroes-saints.component.css'],
  providers: [ContentManagementService]
})

export class SuperheroesSaintsComponent implements OnInit {

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];
  superheroSaintData: any;
  pageBannerIntroContent: any;

  characterStore: characterStore = {};

  options: NgxMasonryOptions = {

    itemSelector: '.character-item',
    gutter: 10,
    //transitionDuration: '1.2s',
    horizontalOrder: true,
    //fitWidth: true,
    //percentPosition: true,
    columnWidth: 20,
    resize: true
  };

  constructor(
    private contentService: ContentManagementService,
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle("The Nerd Interpreter - Superheroes and Saints");

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

    this.getSuperheroSaintBannerIntroData();

    this.getSuperheroSaintsData();

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

  getSuperheroSaintsData() {

    this.contentService.getAllSuperheroesSaints().subscribe((response: any[]) => {

      if (response !== null) {

        this.superheroSaintData = response;

      }

    });

  }

  getSuperheroSaintBannerIntroData() {

    this.contentService.getContentByPageSlug("superheroes-and-saints").subscribe(response => {

      if (response !== "" || response !== null) {

        this.pageBannerIntroContent = response[0];

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
