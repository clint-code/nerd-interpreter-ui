import { Component, ViewChild, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CharacterdataService } from '../../services/characterdata.service';
import  $  from 'jquery';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export interface RecordData { 
  id: number, 
  title: string, 
  category: string, 
  characterImage: string,
};

interface RecordcharactersData {
  cached?: RecordData[];
  refined?: RecordData[];
}

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrls: ['./marvel-characters.component.css'],
  providers:[
    CharacterdataService
  ]
})
export class MarvelCharactersComponent implements OnInit {

  loadingView:boolean = false;
  imagesLoaded:boolean = false;
  siteImages:any = [];

  selection: string;
  reset: string;
  //charactersData:any;
  charactersData: RecordcharactersData = {};

  options: NgxMasonryOptions = {

    itemSelector: '.character-item',
    gutter: 10,
    transitionDuration: '1.2s',
    horizontalOrder: true,
    fitWidth: true,
    percentPosition: true,
    //columnWidth: 350

  };

  @ViewChild(NgxMasonryComponent, {static: false}) 

  masonry: NgxMasonryComponent;

  constructor(
    private characterData: CharacterdataService
  ) { }

  ngOnInit(): void {

    $('html, body').animate({
      scrollTop: $(".banner-image-section").offset({
        top: 0
      })
    }, 500);

    let data = [

      {
        id: 1,
        title: "Black Widow",
        category: "hero",
        characterImage: "./assets/img/marvel-characters/black-widow.png",
        alt: "blackwidow"
      },

      {
        id: 4,
        title: "Black Panther",
        category: "hero",
        characterImage: "./assets/img/marvel-characters/black-panther.png",
        alt: "blackpanther"
      }, 
      {
        id: 3,
        title: "Erik Killmonger",
        category: "villain",
        characterImage: "./assets/img/marvel-characters/erik-killmonger.png",
        alt: "erik-killmonger"
      },
      {
        id: 5,
        title: "Iron Man",
        category: "hero",
        characterImage: "./assets/img/marvel-characters/iron-man.png",
        alt: "iron-man"
      },

      {
        id: 2,
        title: "Magneto",
        category: "villain",
        characterImage: "./assets/img/marvel-characters/magneto.png",
        alt: "magneto"
      },
  
      {
        id: 6,
        title: "Thanos",
        category: "villain",
        characterImage: "./assets/img/marvel-characters/thanos.png",
        alt: "thanos"
      }

    ]

    //this.getMarvelCharactersData();

    this.selection = 'all';
    this.charactersData.cached = data;

    this.charactersData.refined = data.sort((a,b) => a.id - b.id);

    $(".filterButton").click(this.toggleFilter);

  }

  expand(item){
    item.opened = !item.opened;
    this.masonry.layout();
  }

  styles(item){

    return {
      'opened' : item.opened
    }

  }

  ngAfterViewInit():void{

    gsap.registerPlugin(ScrollTrigger);
    
    setTimeout(() => {

      this.siteImages = Preloader.getImages();

      this.fadeInUp();

      this.fadeInLeft();

    }, 1000);

  }

  // getMarvelCharactersData(){

  //   this.characterData.getAllMarvelCharactersListingJSON().subscribe( response => {

  //     this.charactersData = response;

  //     console.log(this.charactersData);
  //   })

  // }

  fadeInUp(){

    const scrollBox = gsap.timeline({

      scrollTrigger: {
        trigger: '.text-intro-section',
        toggleActions: 'restart none none none'
      }
    });

      scrollBox.from('.text-intro-section',{
         opacity: 0, 
         y: 100,
         duration: 2
      });

  }

  toggleFilter(){

    if($(this).hasClass("is-checked") ) {

      $(".filterButton").removeClass("is-checked");
      $(this).removeClass("is-checked");
    
    } else {

      $(".filterButton").removeClass("is-checked");
      $(this).addClass("is-checked");

    }

  }

  filterCharacters(category:any){

    this.charactersData.refined = this.charactersData.cached

        .filter(p => p.category == category || category == 'all');

      this.masonry.reloadItems();

  }

  fadeInLeft(){

    const scrollBox = gsap.timeline({

      scrollTrigger: {
        trigger: '.more-cnt-section',
        start: 'top center',
        toggleActions: 'restart none none none'
      }
    });

      scrollBox.from('.more-cnt-section',{
         opacity: 0, 
         x: -100,
         duration: 2
      });

  }

}
