import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class ContentManagementService {

  constructor(
    private http: HttpClient
  ) { }

  getContentByPostSlug(slug) {

    return this.http.get(`${environment.contentRoot}pages?slug=${slug}`);

  }

  getAllDCCharacters() {

    return this.http.get(`${environment.contentRoot}dc_characters`);
    //return this.http.get(`${environment.contentRoot}dc_characters?per_page=100&_fields=acf&acf_format=standard`);
  }

  getAllMarvelCharacters() {

    return this.http.get(`${environment.contentRoot}marvel_characters`);

  }

  getSingleCharacter(characterSlug) {

    return this.http.get(`${environment.contentRoot}posts?slug=${characterSlug}`);

  }

  getSingleDcCharacter(characterSlug) {

    return this.http.get(`${environment.contentRoot}dc_characters?slug=${characterSlug}`);

  }

  getSingleMarvelCharacter(characterSlug) {

    return this.http.get(`${environment.contentRoot}marvel_characters?slug=${characterSlug}`);

  }

}
