import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import Preloader from '../../utils/preloader';
import $ from 'jquery';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { ContentManagementService } from '../../services/content-management.service';
import { FooterAltComponent } from '../../components/footer-alt/footer-alt.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from '../../components/banner/banner.component';
import { PreloaderComponent } from '../../components/preloader/preloader.component';


@Component({
  selector: 'app-single-superhero-saint-view',
  templateUrl: './single-superhero-saint-view.component.html',
  styleUrls: ['./single-superhero-saint-view.component.css'],
  providers: [ContentManagementService],
  standalone: true,
  imports: [
    FooterAltComponent,
    PreloaderComponent,
    CommonModule,
    SharedModule,
    BannerComponent
  ]
})

export class SingleSuperheroSaintViewComponent implements OnInit {

  loadingView: boolean = false;
  postSlug: string = "";
  postDetails: any = [];
  imagesLoaded: boolean = false;
  siteImages: any = [];
  iframeHtml: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentManagementService,
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {

    this.loadingView = true;

    this.postSlug = this.route.snapshot.paramMap.get('slug');

    $(window).scroll(this.progressScrollBar);

    $(window).scroll(this.showUpScroll);

    $('html, body').animate({
      scrollTop: $(".content-section").offset({
        top: 30
      })
    }, 500);

    this.contentService.getSuperheroSaintContent(this.postSlug).subscribe((response: any[]) => {

      if (response !== null) {

        this.postDetails = response[0];

        this.titleService.setTitle("The Nerd Interpreter - " + this.postDetails?.title?.rendered);

        this.loadingView = false;

        if (this.postDetails.acf.video_podcast) {
          const iframeHtmlString = this.postDetails.acf.video_podcast;
          this.iframeHtml = this.sanitizer.bypassSecurityTrustHtml(iframeHtmlString);
        }

      }

    });

  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      this.siteImages = Preloader.getImages();

      this.animateContentCategory();

    }, 1000);

  }

  progressScrollBar() {

    let barBackground = $("#scrollbar-bg");
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    barBackground.css("min-width", $(document).width() + "px");

    $(window).resize(function () {
      barBackground.css("min-width", $(document).width() + "px");
    });

    let scrollPercent = scrollTop / (docHeight - winHeight) * 100;

    $("#scrollbar").css("width", scrollPercent + "%");

  }

  showUpScroll() {

    let scrollUp = $(".scrollup");

    scrollUp.toggleClass('scrollup-visible', $(this).scrollTop() > scrollUp.height());

  }

  animateContentCategory() {

    document.querySelectorAll('.main-cnt').forEach((box) => {

      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          toggleActions: 'restart none none restart',
        },
      });

      scrollBox.from(box, {
        y: 150,
        opacity: 0,
        duration: 2.5,
        stagger: 1,
      });

    });

  }


}
