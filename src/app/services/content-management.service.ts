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

  getAllDCCharacters(slug) {

    return this.http.get(`${environment.contentRoot}posts?slug=${slug}`);

  }

  getSingleCharacter(characterSlug) {

    return this.http.get(`${environment.contentRoot}posts?slug=${characterSlug}`);

  }

}
