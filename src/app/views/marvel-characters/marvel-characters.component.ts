import { Component, ViewChild, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CharacterdataService } from '../../services/characterdata.service';
import  $  from 'jquery';

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
  charactersData:any;

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

    this.getMarvelCharactersData();

    this.selection = 'all';
    //this.charactersData.cached = this.charactersData;
    //this.charactersData.refined = this.charactersData.sort((a,b) => a.id - b.id);

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

  getMarvelCharactersData(){

    this.characterData.getAllMarvelCharactersListingJSON().subscribe( response => {

      this.charactersData = response;

      console.log(this.charactersData);
    })

  }

}
