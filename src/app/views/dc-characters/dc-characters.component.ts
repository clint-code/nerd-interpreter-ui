import { Component, ViewChild, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { HttpClient } from '@angular/common/http';
import { CharacterdataService } from '../../services/characterdata.service';
import $ from 'jquery';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export interface characterInfo {
  id: number;
  title: string;
  category: string;
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
    CharacterdataService
  ]
})

export class DcCharactersComponent implements OnInit {

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];
  selection: string;
  reset: string;
  charactersData: any;
  characterStore : characterStore = {};

  options: NgxMasonryOptions = {

    itemSelector: '.character-item',
    gutter: 10,
    transitionDuration: '1.2s',
    horizontalOrder: true,
    fitWidth: true,
    percentPosition: true,
    columnWidth: 190,
    originLeft: false

  };

  @ViewChild(NgxMasonryComponent, { static: false })

  masonry: NgxMasonryComponent;

  constructor(
    private characterDataService: CharacterdataService,
  ) {

  }

  ngOnInit(): void {

    this.loadingView = true;

    $('html, body').animate({
      scrollTop: $(".banner-image-section").offset({
        top: 0
      })
    }, 500);

    this.getDcCharactersData();
    
    $(".filterButton").click(this.toggleFilter);

  }

  ngAfterViewInit(): void {

    this.siteImages = Preloader.getImages();

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

      this.fadeInUp();

      this.fadeInLeft();

    }, 1000);

    // setTimeout(() => {

    //   this.getDcCharactersData();

    // }, 3000);

  }

  getDcCharactersData(){

    this.characterDataService.getAllDcCharactersListingJSON().subscribe( (response: any[]) => {

      this.charactersData = response;

      this.characterStore.cached = response;

      this.characterStore.refined = this.charactersData.sort((firstCharacter, secondCharacter) => firstCharacter.id = secondCharacter.id);

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

  filterCharacters(category:any){
    
      this.characterStore.refined = this.characterStore.cached.filter(
        (p) => p.category == category || category == 'all'
      );
    
      this.masonry.reloadItems();

      console.log("Filtered result of: " + category, this.characterStore.refined);

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
