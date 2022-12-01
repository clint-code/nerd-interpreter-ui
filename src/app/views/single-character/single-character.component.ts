import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import  $  from 'jquery';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  loadingView:boolean = false;
  imagesLoaded:boolean = false;
  siteImages:any = [];

  constructor() { }

  ngOnInit(): void {

    this.loadingView = true;

    $(window).scroll(this.progressScrollBar);

    $(window).scroll(this.showUpScroll);

    $('html, body').animate({
      scrollTop: $(".banner-image-section").offset({
        top: 0
      })
    }, 500);

  }

  ngAfterViewInit():void{

    this.siteImages = Preloader.getImages();

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      this.fadeInLeft();

      this.animateContentCategory();

    }, 1000);
    
  }

  progressScrollBar(){

    let barBackground = $("#scrollbar-bg");
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    barBackground.css("min-width", $(document).width() + "px");

    $(window).resize(function () {
      barBackground.css("min-width", $(document).width() + "px");
    });

    let scrollPercent = scrollTop / (docHeight - winHeight) *100;

    $("#scrollbar").css("width", scrollPercent + "%");


  }

  scrollPage(event){

    console.log(event);

    let targetDiv = event.target.dataset.target;
    let contentDiv = $('.' + targetDiv);

    console.log(targetDiv + " " + contentDiv);

    $('html, body').stop().animate({
      scrollTop: contentDiv.offset().top
    }, 1000);

  }

  showUpScroll(){

    let scrollUp= $(".scrollup");

    scrollUp.toggleClass('scrollup-visible', $(this).scrollTop() > scrollUp.height());

  }

  fadeInLeft(){

    const scrollBox = gsap.timeline({

      scrollTrigger: {
        trigger: '.mini-navigation',
        toggleActions: 'restart none none none'
      }
    });

      scrollBox.from('.mini-navigation',{
         opacity: 0, 
         x: -100,
         duration: 2
      });

  }

  animateContentCategory(){

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
