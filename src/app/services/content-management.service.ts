import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.prod';

@Injectable({
  /**the service is registered as a singleton in the root injector and is available throughout the application */
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

  getAllSuperheroesSaints() {

    return this.http.get(`${environment.contentRoot}superheroes_saints`);

  }

  getSuperheroSaintContent(superheroSaintSlug) {

    return this.http.get(`${environment.contentRoot}superheroes_saints?slug=${superheroSaintSlug}`);

  }


}
