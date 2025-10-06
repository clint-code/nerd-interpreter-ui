import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { CommonModule } from '@angular/common';

import { Title, Meta } from '@angular/platform-browser';

import { ContentManagementService } from '../../services/content-management.service';

import $ from 'jquery';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterAltComponent } from '../../components/footer-alt/footer-alt.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { SharedModule } from '../../shared/shared.module';
import { PreloaderComponent } from '../../components/preloader/preloader.component';

gsap.registerPlugin(ScrollTrigger);


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
    providers: [ContentManagementService],
    imports: [
        PreloaderComponent,
        FooterAltComponent,
        CommonModule,
        BannerComponent,
        SharedModule
    ]
})

export class SuperheroesSaintsComponent implements OnInit {

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];
  superheroSaintData: any;
  pageBannerIntroContent: any;

  characterStore: characterStore = {};
  updateMasonryLayout: boolean = false;

  options: NgxMasonryOptions = {

    itemSelector: '.character-item',
    gutter: 10,
    horizontalOrder: true,
    //fitWidth: true,
    percentPosition: true,
    initLayout: true,
    columnWidth: 20,
    resize: true
  };

  constructor(
    private contentService: ContentManagementService,
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit() {

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

    //this.siteImages = Preloader.getImages();

    // console.log("Site images:", this.siteImages.length);

    this.getSuperheroSaintBannerIntroData();

    this.getSuperheroSaintsData();

  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.siteImages = Preloader.getImages();
    }, 1000);

    this.fadeInUp();
    this.fadeInLeft();

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

    gsap.from(".text-intro-section", {
      scrollTrigger: {
        trigger: ".text-intro-section",
      },
      toggleActions: 'restart none none none',
      opacity: 0,
      y: 100,
      duration: 0.6,

    });

    // const scrollBox = gsap.timeline({

    //   scrollTrigger: {
    //     trigger: '.text-intro-section',
    //     toggleActions: 'play pause resume reset'
    //   }
    // });

    // scrollBox.from('.text-intro-section', {
    //   opacity: 0,
    //   y: 100,
    //   duration: 2
    // });

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
