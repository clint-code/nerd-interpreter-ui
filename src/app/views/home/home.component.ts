import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadingView:boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.loadingView = true;

    this.backgroundAnimate();
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

  

}
