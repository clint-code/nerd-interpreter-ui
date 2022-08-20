import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  @Input() percentage:number;

  @Output() siteLoaded = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {


  }

  preloaderLoaded(event){
    
  }

}
