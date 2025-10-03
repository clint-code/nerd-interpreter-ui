import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import $ from 'jquery';
import { Title, Meta } from '@angular/platform-browser';
import Preloader from '../../utils/preloader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class HomeComponent implements OnInit {

  loadingView: boolean = false;
  imagesLoaded: boolean = false;
  siteImages: any = [];
  counter: number = 0;
  counter2: number = 0;
  intervalTime: number = 30;
  intervalId: any;
  intervalId2: any;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle("The Nerd Interpreter - All about comic characters");

    setTimeout(() => {

      this.loadingView = true;

    }, 2000);

    this.backgroundAnimate();

  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

    }, 1000);

  }

  backgroundAnimate() {

    this.loadingView = false;

    this.intervalId = setInterval(() => {
      this.counter -= 1;
      $('.hero-section').css('background-position', this.counter + 'px 0');

    }, this.intervalTime);

    this.intervalId2 = setInterval(() => {
      this.counter2 += 1;
      $('.villain-section').css('background-position', this.counter2 + 'px 0');

    }, this.intervalTime);

  }

  // resetBackgroundAnimate() {

  //   clearInterval(this.intervalId);

  //   clearInterval(this.intervalId2);

  //   this.counter = 0;

  //   this.counter2 = 0;

  //   $('.hero-section').css('background-position', this.counter + 'px 0');
  //   // console.log('background-position:', this.counter);

  //   $('.villain-section').css('background-position', this.counter2 + 'px 0');
  //   // console.log('background-position:', this.counter2);

  //   $(window).onload = this.backgroundAnimate();

  // }

  handleSiteLoaded() {

    this.imagesLoaded = true;
  }



}
