import { Component, ViewChild, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CharacterdataService } from '../../services/characterdata.service';
import  $  from 'jquery';

// export interface RecordData { 
//   id: number, 
//   title: string, 
//   category: string, 
//   opened?: boolean, 
// };

// interface RecordStore {
//   cached?: RecordData[];
//   refined?: RecordData[];
//   stamp?: Date;
// }

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
  charactersData:any;
 // charactersData: RecordcharactersData = {};

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

    this.getDcCharactersData();

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

    this.siteImages = Preloader.getImages();
    
  }

  getDcCharactersData(){

    this.characterData.getAllDcCharactersListingJSON().subscribe( response => {

      this.charactersData = response;

      console.log(this.charactersData);
    })

  }

  filterCharacters(category:string){

    if( $(this).hasClass("is-checked")) {

      $(".filterButton").removeClass("is-checked");
      $(this).removeClass("is-checked").next(".filterButton");

    
    } else {

      $(".filterButton").removeClass("is-checked");
      $(this).addClass("is-checked").next(".filterButton");

    }

    this.charactersData.refined = this.charactersData.cached

        .filter(p => p.category == category || category == 'all');

      this.masonry.reloadItems();

  }

}
