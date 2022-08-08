import { Component, OnInit } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  toggleMenu(){

    //if toggle class is open

    $(".menuOpener").toggleClass("open");

    if($(".menuOpener").hasClass("open")) {

      $(".menuOpener").fadeOut();

      $("header .mainMenu").show().stop().animate({

        left: 0

      }, 1000);

    } else {

      $(".menuOpener").fadeIn();

      $("header .mainMenu").stop().animate({

        left: '-100%'

      }, 1000);

    }
      

  }

  handleLinkHover(event){

     let currentBackground = event.target.dataset.background;

    $(".mainMenu .backgroundImage." + currentBackground).stop().fadeIn();


     console.log(currentBackground);
  }

  resetStyles(event){

    $(".mainMenu .backgroundImage").stop().fadeOut();

  }

}
