import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-character-stats',
    templateUrl: './character-stats.component.html',
    styleUrls: ['./character-stats.component.css'],
    standalone: false
})
export class CharacterStatsComponent implements OnInit {

  @Input() comicUniverse: string;
  @Input() characterAlignment: string;
  @Input() baseOfOperation: string;

  constructor() { }

  ngOnInit(): void {
  }

}
