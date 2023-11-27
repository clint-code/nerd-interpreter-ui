import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterdataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDcCharactersListingJSON() {

    return this.http.get("/assets/data/dc_characters.json");

  }

  getAllMarvelCharactersListingJSON() {

    return this.http.get("/assets/data/marvel_characters.json");

  }

  getAllSuperheroesSaintsListing() {

    return this.http.get("/assets/data/supehero-saints.json");
  }

  getComicCoversListing() {

    return this.http.get("/assets/data/comics_covers.json");

  }

  getCharacterPortraitsListing() {

    return this.http.get("/assets/data/character_portraits.json");

  }

}
