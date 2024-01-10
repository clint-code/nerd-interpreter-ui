import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import $ from 'jquery';

import Preloader from '../../utils/preloader';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  siteImages: any = [];

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle("The Nerd Interpreter - Contact");

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'Contact Me'
      }
    );

    $('html, body').animate({
      scrollTop: $(".content-section").offset({
        top: 40
      })
    }, 500);

  }

  ngAfterViewInit(): void {

    this.siteImages = Preloader.getImages();

  }

}
