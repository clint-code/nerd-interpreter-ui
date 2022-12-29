import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import  $  from 'jquery';

import { CharacterdataService } from '../../services/characterdata.service';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  loadingView:boolean = false;
  imagesLoaded:boolean = false;
  siteImages:any = [];

  characterPotraits: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  constructor(
    private characterPortraitsData: CharacterdataService
  ) { }

  ngOnInit(): void {

    this.loadingView = true;

    $('html, body').animate({
      scrollTop: $(".banner-image-section").offset({
        top: 0
      })
    }, 500);

    this.getCharacterPortaits();

  }

  ngAfterViewInit():void{

    this.siteImages = Preloader.getImages();
    
  }

  getCharacterPortaits(){

    this.characterPortraitsData.getCharacterPortraitsListing().subscribe(response => {

      this.characterPotraits = response;

      console.log(this.characterPotraits);
    });

  }

}
