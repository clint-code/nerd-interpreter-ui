import { Component, OnInit, Input } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-comic-slider',
  templateUrl: './comic-slider.component.html',
  styleUrls: ['./comic-slider.component.css']
})
export class ComicSliderComponent implements OnInit {

  @Input() sliderImages: string;
  @Input() sliderAlt: string;

  constructor() { }

  ngOnInit(): void {

    //this.createCarousel();

  }

  createCarousel() {

    $(".owl-carousel").owlCarousel({
      items: 6,
      itemsDesktop: [1199, 6],
      itemsDesktopSmall: [980, 4],
      itemsTablet: [768, 2],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
      navigation: false,
      autoPlay: true,
      pagination: false,
      navigationText: ["", ""],
    });

  }


}
