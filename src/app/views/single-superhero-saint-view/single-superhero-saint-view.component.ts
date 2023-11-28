import { Component, OnInit } from '@angular/core';
import Preloader from '../../utils/preloader';
import $ from 'jquery';

import { CharacterdataService } from '../../services/characterdata.service';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-single-superhero-saint-view',
  templateUrl: './single-superhero-saint-view.component.html',
  styleUrls: ['./single-superhero-saint-view.component.css']
})

export class SingleSuperheroSaintViewComponent implements OnInit {

  siteImages: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
