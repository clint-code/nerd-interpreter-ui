import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import $ from 'jquery';
import { Title, Meta } from '@angular/platform-browser';

import { CharacterdataService } from '../../services/characterdata.service';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
    private characterPortraitsData: CharacterdataService,
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

    $('html, body').animate({
      scrollTop: $(".content-section").offset({
        top: 50
      })

    }, 500);

    this.getCharacterPortaits();

    this.getSuperheroesSaintsPortraits();

  }

  ngAfterViewInit(): void {

    this.siteImages = Preloader.getImages();

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      this.animateContentCategory();

    }, 1000);

  }

  getCharacterPortaits() {

    this.characterPortraitsData.getCharacterPortraitsListing().subscribe(response => {

      this.characterPortraits = response;

    });

  }

  getSuperheroesSaintsPortraits() {

    this.characterPortraitsData.getAllSuperheroesSaintsListing().subscribe(response => {

      this.superheroSaintsPortraits = response;

      console.log(this.superheroSaintsPortraits);

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
