import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { CharacterdataService } from '../../services/characterdata.service';
import $ from 'jquery';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
  srcCharactersArray: any = [];

  options: NgxMasonryOptions = {

    itemSelector: '.character-item',
    gutter: 10,
    transitionDuration: '1.2s',
    horizontalOrder: true,
    fitWidth: true,
    percentPosition: true,
    //columnWidth: 190

  };

  @ViewChild('btn', { static: true }) button: ElementRef;

  @ViewChild(NgxMasonryComponent, { static: false })

  masonry: NgxMasonryComponent;

  constructor(
    private characterDataService: CharacterdataService,
    private httpClient: HttpClient,
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

      //this.animateCharacters();

      this.fadeInUp();

      this.fadeInLeft();

    }, 1000)

  }

  getDcCharactersData(){

    this.characterDataService.getAllDcCharactersListingJSON().subscribe( response => {

      this.charactersData = response;
    
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

    // const filteredCharacters = fromEvent(this.button.nativeElement, 'click').pipe(
    //   map((characters) => this.charactersData.filter((obj) => 
    //       obj.category == category || category == 'all' ))
    //   );

      // this.charactersData.pipe(
      //   map((characters) => characters.charactersData.filter((obj) => 
      //     obj.category == category || category == 'all' ))
      // );

      let filterCharacters = this.charactersData.filter(obj=> obj.category == category || category == 'all' );

      console.log("Filtered result of: " + category, filterCharacters);

      this.masonry.reloadItems();

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
