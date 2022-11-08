import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import  $  from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  loadingView:boolean = false;
  imagesLoaded:boolean = false;
  siteImages:any = [];

  constructor() { }

  ngOnInit(): void {

    this.loadingView = true;

    $('html, body').animate({
      scrollTop: $(".banner-image-section").offset({
        top: 0
      })
    }, 500);
  }

  ngAfterViewInit():void{

    this.siteImages = Preloader.getImages();
    
  }

}
