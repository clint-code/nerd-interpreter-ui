import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrls: ['./marvel-characters.component.css']
})
export class MarvelCharactersComponent implements OnInit {

  loadingView:boolean = false;
  imagesLoaded:boolean = false;
  siteImages:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    
    setTimeout(() => {

      this.siteImages = Preloader.getImages();

    }, 1000);

  }

}
