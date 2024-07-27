import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import $ from 'jquery';

import Preloader from '../../utils/preloader';
import { ContentManagementService } from '../../services/content-management.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  siteImages: any = [];
  contactBannerIntroContent: any;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private contentService: ContentManagementService,
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

    this.getContactBannerIntroData();

  }

  ngAfterViewInit(): void {

    this.siteImages = Preloader.getImages();

  }

  getContactBannerIntroData() {

    this.contentService.getContentByPageSlug("contact").subscribe(response => {

      if (response !== "" || response !== null) {

        this.contactBannerIntroContent = response[0];

        console.log("Intro content:", this.contactBannerIntroContent);

      }

    });
  }

}
