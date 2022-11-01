import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterdataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDcCharactersListingJSON(){

    return this.http.get("/assets/data/dc_characters.json");
    
  }

  getAllMarvelCharactersListingJSON(){

    return this.http.get("/assets/data/marvel_characters.json");
    
  }

}
