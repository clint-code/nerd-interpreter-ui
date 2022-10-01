import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';

import  $  from 'jquery';


@Component({
  selector: 'app-dc-characters',
  templateUrl: './dc-characters.component.html',
  styleUrls: ['./dc-characters.component.css']
})
export class DcCharactersComponent implements OnInit {

  loadingView:boolean = false;
  imagesLoaded:boolean = false;
  siteImages:any = [];


  constructor() { }

  ngOnInit(): void {

    this.loadingView = true;

    // let $grid = $('.grid').isotope({

    //   itemSelector: '.character-item',
    //   percentPosition: true,
    //   masonry: {
    //       columnWidth: '.grid-sizer'
    //   }
    //   // layout mode options
    // });

    // $grid.imagesLoaded().progress(
    //   function () {
    //       $grid.isotope('layout');
    //   }
    // );


  }

  ngAfterViewInit():void{

    this.siteImages = Preloader.getImages();
    
  }

  filterCharacters(){
    console.log("Hello there!");
  }

}
