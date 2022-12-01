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
  selector: 'app-dc-characters',
  templateUrl: './dc-characters.component.html',
  styleUrls: ['./dc-characters.component.css'],
  providers:[
    CharacterdataService
  ]
})

export class DcCharactersComponent implements OnInit {

  loadingView:boolean = false;
  imagesLoaded:boolean = false;
  siteImages:any = [];

  selection: string;
  reset: string;
 // charactersData:any;
  charactersData: RecordcharactersData = {};

  options: NgxMasonryOptions = {

    itemSelector: '.character-item',
    gutter: 10

  };

  @ViewChild(NgxMasonryComponent, {static: false}) 

  masonry: NgxMasonryComponent;

  constructor(
    private characterData: CharacterdataService
  ) { 

  }

  ngOnInit(): void {

    this.loadingView = true;

    $('html, body').animate({
      scrollTop: $(".banner-image-section").offset({
        top: 0
      })
    }, 500);

    let data = [

      {
        id: 1,
        title: "Superman",
        category: "hero",
        characterImage: "./assets/img/dc-characters/superman.png",
        alt: "superman"
      },

      {
        id: 4,
        title: "Joker",
        category: "villain",
        characterImage: "./assets/img/dc-characters/joker.png",
        alt: "joker"
      }, 
      {
        id: 3,
        title: "Batman",
        category: "hero",
        characterImage: "./assets/img/dc-characters/batman.png",
        alt: "batman"
      },
      {
        id: 5,
        title: "Lex Luthor",
        category: "villain",
        characterImage: "./assets/img/dc-characters/lex-luthor.png",
        alt: "lex-luthor"
      },

      {
        id: 2,
        title: "Aquaman",
        category: "hero",
        characterImage: "./assets/img/dc-characters/aquaman.png",
        alt: "aquaman"
      },
  
      {
        id: 6,
        title: "Zod",
        category: "villain",
        characterImage: "./assets/img/dc-characters/zod.png",
        alt: "zod"
      }

    ]

    //this.getDcCharactersData();

    this.selection = 'all';
    this.charactersData.cached = data;

    setTimeout( ()=> {

      this.charactersData.refined = data.sort((a,b) => a.id - b.id);

    }, 1500);

  }

  // expand(item){
  //   item.opened = !item.opened;
  //   this.masonry.layout();
  // }

  // styles(item){
  //   return {
  //     'opened' : item.opened
  //   }

  // }

  ngAfterViewInit():void{

    this.siteImages = Preloader.getImages();

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(()=>{

      //this.animateCharacters();

      this.fadeInUp();

      this.fadeInLeft();

    }, 1000)
    
  }

  // getDcCharactersData(){

  //   this.characterData.getAllDcCharactersListingJSON().subscribe( response => {

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

  animateCharacters(){

    document.querySelectorAll('.character-item').forEach((box) => {

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

  filterCharacters(category:any){

    if($(this).hasClass("is-checked") ) {

      $(".filterButton").removeClass("is-checked");
      $(this).removeClass("is-checked");
    
    } else {

      $(".filterButton").removeClass("is-checked");
      $(this).addClass("is-checked");

      console.log("Added class");

    }

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
