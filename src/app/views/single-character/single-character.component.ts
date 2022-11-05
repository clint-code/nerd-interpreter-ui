import { Component, OnInit } from '@angular/core';

import  $  from 'jquery';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(window).scroll(this.progressScrollBar);

    $('html, body').animate({
      scrollTop: $(".banner-image-section").offset({
        top: 0
      })
    }, 500);

  }

  progressScrollBar(){

    let barBackground = $("#scrollbar-bg");
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    barBackground.css("min-width", $(document).width() + "px");

    $(window).resize(function () {
      barBackground.css("min-width", $(document).width() + "px");
    });

    let scrollPercent = scrollTop / (docHeight - winHeight) *100;

    $("#scrollbar").css("width", scrollPercent + "%");


  }

  scrollDownPage(event){

    console.log(event);

    let targetDiv = event.target.dataset.target;
    let contentDiv = $('.' + targetDiv);

    console.log(targetDiv + " " + contentDiv);

    $('html, body').stop().animate({
      scrollTop: contentDiv.offset().top
    }, 1000);

  }

}
