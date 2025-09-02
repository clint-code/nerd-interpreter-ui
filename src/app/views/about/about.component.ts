import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Preloader from '../../utils/preloader';
import { Title, Meta } from '@angular/platform-browser';

import { CharacterdataService } from '../../services/characterdata.service';
import { ContentManagementService } from '../../services/content-management.service';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    ContentManagementService
  ],
  standalone: false
})

export class AboutComponent implements OnInit {

  aboutContent: any;

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];

  characterPortraits: any;
  superheroSaintsPortraits: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  };

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private characterPortraitsData: CharacterdataService,
    private contentService: ContentManagementService,
    private titleService: Title,
    private metaService: Meta,
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

    this.document.documentElement.scrollTop = 0;

    this.getAboutContent();

    this.getCharacterPortaits();

    this.getSuperheroesSaintsPortraits();

  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

      this.animateContentCategory();

    }, 1000);

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
