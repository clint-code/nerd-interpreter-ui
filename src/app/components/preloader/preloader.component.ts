import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  @Input() percentage:number;
  @Input() images:any;
  @Output() siteLoaded = new EventEmitter<boolean>();

  siteImages:any;
  imagesLoaded:number;
  totalImages:number;
  percentageLoaded:number;
  
  constructor() { }

  ngOnInit(): void {

    this.imagesLoaded = 0;
    this.siteImages = this.images;
    this.totalImages = this.siteImages.length;

    this.loadImages(this.siteImages);

  }


  loadImages(images){

    for (let i = 0; i < this.totalImages; i++) {
       
      const image = new Image();

      image.addEventListener("load", (event) => {
        
        this.imageLoaded(event);

      }, false);

      image.src = this.siteImages[i];

    }

  }

  preloaderLoaded(event){
    
  }

  imageLoaded(event){

    this.imagesLoaded++;

    this.percentageLoaded = Math.round((this.imagesLoaded/this.totalImages) * 100);

    if(this.imagesLoaded == this.totalImages){

      this.loadComplete();
      
    }

  }

  loadComplete(){

    $(".preloader").fadeOut();

  }

}
