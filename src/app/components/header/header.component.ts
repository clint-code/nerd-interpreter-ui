import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.router.events.subscribe(val => {

    //   if (val instanceof NavigationEnd && $(".menuCloser").hasClass("open")) {

    //     this.toggleMenu();

    //   }

    // });

  }

  toggleMenu() {

    //if toggle class is open

    $(".menuOpener").toggleClass("open");

    if ($(".menuOpener").hasClass("open")) {

      $(".menuOpener").fadeOut();

      $("header .mainMenu").show().stop().animate({

        left: 0

      }, 500);

    } else {

      $(".menuOpener").fadeIn();

      $("header .mainMenu").stop().animate({

        left: '-100%'

      }, 500);

    }


  }

  handleLinkHover(event) {

    let currentBackground = event.target.dataset.background;

    $(".mainMenu .backgroundImage." + currentBackground).stop().fadeIn();


    console.log(currentBackground);
  }

  resetStyles(event) {

    $(".mainMenu .backgroundImage").stop().fadeOut();

  }

}
