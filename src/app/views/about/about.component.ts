import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

import Preloader from '../../utils/preloader';
import { Title, Meta } from '@angular/platform-browser';

import { CharacterdataService } from '../../services/characterdata.service';
import { ContentManagementService } from '../../services/content-management.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';


// import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from '../../shared/shared.module';
import { FooterAltComponent } from '../../components/footer-alt/footer-alt.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { PreloaderComponent } from '../../components/preloader/preloader.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    ContentManagementService
  ],
  standalone: true,
  imports: [
    CommonModule,
    PreloaderComponent,
    FooterAltComponent,
    BannerComponent,
    SharedModule,
    RouterModule
  ]
})

export class AboutComponent implements OnInit {

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  @ViewChild('carouselInner') carouselInner!: QueryList<ElementRef>;
  @ContentChildren('slide') slides!: QueryList<ElementRef>;

  aboutContent: any;

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];

  characterPortraits: any;
  superheroSaintsPortraits: any;
  currentSlide = 0;

  // customOptions: OwlOptions = {
  //   loop: true,
  //   autoplay: true,
  //   center: true,
  //   dots: false,
  //   autoHeight: true,
  //   autoWidth: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     }
  //   }
  // };
  newDivElement: any;

  cellWidth: number = 450;
  numCells: number = 0;
  cellStep: number = 0;
  wrapWidth: number = 0;

  timelineBase = gsap.timeline({ paused: true });
  timeLineAnimation = gsap.timeline({ repeat: -1, paused: true });

  constructor(
    private characterPortraitsData: CharacterdataService,
    private contentService: ContentManagementService,
    private titleService: Title,
    private metaService: Meta,
    //private autoPlayTimeline: gsap.core.Timeline
  ) { }

  ngOnInit(): void {

    this.loadingView = true;

    this.titleService.setTitle("The Nerd Interpreter - About");

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'Marvel Characters, DC Characters, DC, Marvel, Heroes, Villains'
      }
    );

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'About the blog'
      }
    );

    this.newDivElement = document.createElement('div');

    this.getAboutContent();

    this.getCharacterPortaits();

    this.getSuperheroesSaintsPortraits();

  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger, Draggable);

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

      this.animateContentCategory();

    }, 1000);

    this.initCarousel();
  }

  initCarousel() {

    // const innerElement = this.carouselInner.first.nativeElement;
    // Draggable.create(innerElement, {
    //   type: 'x',
    //   bounds: this.carouselContainer.nativeElement,
    //   inertia: true,
    //   edgeResistance: 0.65,
    // });

    // const slideWidth = this.slides.first.nativeElement.offsetWidth;
    // const totalWidth = slideWidth * this.slides.length;

    // gsap.to(innerElement, {
    //   x: -totalWidth,
    //   duration: this.slides.length * 2,
    //   ease: 'none',
    //   repeat: -1,
    //   onRepeat: () => {
    //     gsap.set(innerElement, { x: 0 });
    //   }
    // });

  }

  getAboutContent() {

    this.contentService.getContentByPageSlug("about").subscribe(response => {

      if (response !== "" || response !== null) {

        this.aboutContent = response[0];

        this.loadingView = false;

      }


    });

  }

  getCharacterPortaits() {

    this.characterPortraitsData.getCharacterPortraitsListing().subscribe(response => {

      this.characterPortraits = response;

    });

  }

  getSuperheroesSaintsPortraits() {

    this.characterPortraitsData.getAllSuperheroesSaintsListing().subscribe(response => {

      this.superheroSaintsPortraits = response;

    });
  }

  animateContentCategory() {

    document.querySelectorAll('.about-section').forEach((box) => {

      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          toggleActions: 'restart none none restart',
        },
      });

      scrollBox.from(box, {
        y: 150,
        opacity: 0,
        duration: 2.5,
        stagger: 1,
      });

    });

  }

}
