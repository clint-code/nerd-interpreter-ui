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

  //get content by page slug
  getContentByPageSlug(slug) {

    return this.http.get(`${environment.contentRoot}pages?slug=${slug}`);

  }

  getAllCharacters() {

    return this.http.get(`${environment.contentRoot}comic_characters`);

  }

  getSingleCharacter(characterSlug) {

    return this.http.get(`${environment.contentRoot}comic_characters?slug=${characterSlug}`);

  }

  // getSingleDcCharacter(characterSlug) {

  //   return this.http.get(`${environment.contentRoot}comic_characters?slug=${characterSlug}`);

  // }

  // getSingleMarvelCharacter(characterSlug) {

  //   return this.http.get(`${environment.contentRoot}marvel_characters?slug=${characterSlug}`);

  // }

}
