import { Component, OnInit } from '@angular/core';

import Utils from '../../utils/preloader';

import $ from 'jquery';
import Preloader from '../../utils/preloader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadingView:boolean = false;
  imagesLoaded:boolean = false;
  siteImages:any = [];

  constructor() { }

  ngOnInit(): void {

    this.loadingView = true;

    this.backgroundAnimate();

  }

  ngAfterViewInit():void{
    
    setTimeout(() => {

      this.siteImages = Preloader.getImages();

    }, 1000);

  }

  backgroundAnimate(){

    let counter = 0;
    let counter2 = 0;

    setInterval(() => {
      counter -= 1;
      $('.hero-section').css('background-position', counter + 'px 0');
    }, 30);

    setInterval(() => {
      counter2 += 1;
      $('.villain-section').css('background-position', counter2 + 'px 0');
    }, 30)

  }

  handleSiteLoaded(){

    this.imagesLoaded = true;
  }

  

}
