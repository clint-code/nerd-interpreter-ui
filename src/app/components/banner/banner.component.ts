import { Component, OnInit, Input } from '@angular/core';

import gsap from 'gsap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() bannerImage: string;
  @Input() bannerTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
