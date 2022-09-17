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

    console.log("Scroll top: ",scrollTop);
    console.log("Document height: ",docHeight);
    console.log("Window height: ",winHeight);
    console.log("Scroll percent: ",scrollPercent);


    $("#scrollbar").css("width", scrollPercent + "%");


  }

}
