import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import $ from 'jquery';

import { CharacterdataService } from '../../services/characterdata.service';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-single-superhero-saint-view',
  templateUrl: './single-superhero-saint-view.component.html',
  styleUrls: ['./single-superhero-saint-view.component.css']
})

export class SingleSuperheroSaintViewComponent implements OnInit {

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];

  constructor() { }

  ngOnInit(): void {

    this.loadingView = true;

    $(window).scroll(this.progressScrollBar);

    $(window).scroll(this.showUpScroll);

    $('html, body').animate({
      scrollTop: $(".content-section").offset({
        top: 50
      })
    }, 500);

  }

  ngAfterViewInit(): void {

    this.siteImages = Preloader.getImages();

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

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

  showUpScroll() {

    let scrollUp = $(".scrollup");

    scrollUp.toggleClass('scrollup-visible', $(this).scrollTop() > scrollUp.height());

  }


}
