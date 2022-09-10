import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';

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

    this.siteImages = Preloader.getImages();

  }

}
