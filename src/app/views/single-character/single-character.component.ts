import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import Preloader from '../../utils/preloader';
import $ from 'jquery';
import { CommonModule } from '@angular/common';

//import { CharacterdataService } from '../../services/characterdata.service';

import { ContentManagementService } from '../../services/content-management.service';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FooterAltComponent } from '../../components/footer-alt/footer-alt.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from '../../components/banner/banner.component';
import { CharacterStatsComponent } from '../../components/character-stats/character-stats.component';
import { PreloaderComponent } from '../../components/preloader/preloader.component';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css'],
  providers: [ContentManagementService],
  standalone: true,
  imports: [
    FooterAltComponent,
    CommonModule,
    SharedModule,
    BannerComponent,
    CharacterStatsComponent,
    PreloaderComponent
  ]
})

export class SingleCharacterComponent implements OnInit {

  parentSlug: string;
  characterSlug: string = "";
  pageDetails: any = [];
  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];

  comicCovers: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
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
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentManagementService,
    private titleService: Title,
    private metaService: Meta,
  ) {


  }


  ngOnInit(): void {

    this.loadingView = true;

    this.characterSlug = this.route.snapshot.paramMap.get('slug');

    $(window).scroll(this.progressScrollBar);

    $(window).scroll(this.showUpScroll);

    this.contentService.getSingleCharacter(this.characterSlug).subscribe(response => {

      if (response !== null) {

        this.pageDetails = response[0];

        this.titleService.setTitle("The Nerd Interpreter - " + this.pageDetails?.title?.rendered);

        this.loadingView = false;

      }

    });

  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

      this.fadeInLeft();

      this.animateContentCategory();

    }, 1000);

  }

  progressScrollBar() {

    let barBackground = $("#scrollbar-bg");
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    barBackground.css("min-width", $(document).width() + "px");

    $(window).resize(function () {
      barBackground.css("min-width", $(document).width() + "px");
    });

    let scrollPercent = scrollTop / (docHeight - winHeight) * 100;

    $("#scrollbar").css("width", scrollPercent + "%");


  }

  getComicCovers() {

    // this.comicCharacterDataService.getComicCoversListing().subscribe(response => {

    //   this.comicCovers = response;

    //   console.log(this.comicCovers);

    // });

  }

  scrollPage(event) {

    let targetDiv = event.target.dataset.target;
    let contentDiv = $('.' + targetDiv);

    $('html, body').stop().animate({
      scrollTop: contentDiv.offset().top
    }, 1000);

  }

  showUpScroll() {

    let scrollUp = $(".scrollup");

    scrollUp.toggleClass('scrollup-visible', $(this).scrollTop() > scrollUp.height());

  }

  fadeInLeft() {

    const scrollBox = gsap.timeline({

      scrollTrigger: {
        trigger: '.mini-navigation',
        toggleActions: 'restart none none none'
      }
    });

    scrollBox.from('.mini-navigation', {
      opacity: 0,
      x: -100,
      duration: 2
    });

  }

  animateContentCategory() {

    document.querySelectorAll('.main-cnt').forEach((box) => {

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
