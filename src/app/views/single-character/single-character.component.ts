import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Preloader from '../../utils/preloader';
import $ from 'jquery';

import { CharacterdataService } from '../../services/characterdata.service';

import { ContentManagementService } from '../../services/content-management.service';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})

export class SingleCharacterComponent implements OnInit {

  characterSlug: string = "";
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
    private comicCharacterDataService: CharacterdataService,
    private contentService: ContentManagementService
  ) {

    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });

  }


  ngOnInit(): void {

    this.loadingView = true;

    this.characterSlug = this.route.snapshot.paramMap.get('slug');

    $(window).scroll(this.progressScrollBar);

    $(window).scroll(this.showUpScroll);

    $('html, body').animate({
      scrollTop: $(".content-section").offset().top - 50
    }, 500);

    //this.getComicCovers();

    this.contentService.getSingleCharacter(this.characterSlug).subscribe(response => {

      console.log("Response:", response);

    });

  }

  ngAfterViewInit(): void {

    this.siteImages = Preloader.getImages();

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

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

    this.comicCharacterDataService.getComicCoversListing().subscribe(response => {

      this.comicCovers = response;

      console.log(this.comicCovers);

    });

  }

  scrollPage(event) {

    console.log(event);

    let targetDiv = event.target.dataset.target;
    let contentDiv = $('.' + targetDiv);

    console.log(targetDiv + " " + contentDiv);

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
