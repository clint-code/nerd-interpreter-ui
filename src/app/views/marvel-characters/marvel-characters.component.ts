import { Component, ViewChild, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CharacterdataService } from '../../services/characterdata.service';
import  $  from 'jquery';

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
    gutter: 10

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

    setTimeout( ()=> {

      this.charactersData.refined = data.sort((a,b) => a.id - b.id);

    }, 1000);

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
    
    setTimeout(() => {

      this.siteImages = Preloader.getImages();

    }, 1000);

  }

  // getMarvelCharactersData(){

  //   this.characterData.getAllMarvelCharactersListingJSON().subscribe( response => {

  //     this.charactersData = response;

  //     console.log(this.charactersData);
  //   })

  // }

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

}
