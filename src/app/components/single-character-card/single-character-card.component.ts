import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-character-card',
  templateUrl: './single-character-card.component.html',
  styleUrls: ['./single-character-card.component.css'],
  standalone: true
})
export class SingleCharacterCardComponent implements OnInit {

  @Input() characterImage: string;
  @Input() characterName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
