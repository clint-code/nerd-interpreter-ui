import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import Preloader from '../../utils/preloader';
import { ContentManagementService } from '../../services/content-management.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: false
})
export class ContactComponent implements OnInit {

  siteImages: any = [];
  contactBannerIntroContent: any;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
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

    this.document.documentElement.scrollTop = 0;

    this.getContactBannerIntroData();

  }

  ngAfterViewInit(): void {

    this.siteImages = Preloader.getImages();

  }

  getContactBannerIntroData() {

    this.contentService.getContentByPageSlug("contact").subscribe(response => {

      if (response !== "" || response !== null) {

        this.contactBannerIntroContent = response[0];

      }

    });
  }

}
