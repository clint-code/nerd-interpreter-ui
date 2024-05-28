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

  }

  getAllMarvelCharacters() {

    return this.http.get(`${environment.contentRoot}marvel_characters`);

  }

  getSingleCharacter(characterSlug) {

    return this.http.get(`${environment.contentRoot}posts?slug=${characterSlug}`);

  }

}
